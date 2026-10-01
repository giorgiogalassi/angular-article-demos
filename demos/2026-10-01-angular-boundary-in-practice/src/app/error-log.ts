import { ErrorDetails, ErrorHandler, Injectable, inject, signal } from '@angular/core';

export interface LoggedError {
  source: 'onViewError' | 'handleError';
  message: string;
  detail?: string;
}

/** Shared on-screen log, so you can see where each error ended up. */
@Injectable({ providedIn: 'root' })
export class ErrorLog {
  readonly entries = signal<LoggedError[]>([]);

  add(entry: LoggedError) {
    // onViewError runs synchronously while Angular renders, and writing a signal during
    // rendering throws NG0600, which would break the boundary. Defer the write.
    queueMicrotask(() => this.entries.update((entries) => [entry, ...entries].slice(0, 8)));
  }
}

/**
 * When a boundary catches an error, Angular calls onViewError (if present).
 * Errors no boundary handles, like event handler errors, go to handleError.
 */
@Injectable()
export class LoggingErrorHandler extends ErrorHandler {
  private readonly log = inject(ErrorLog);

  override handleError(error: unknown) {
    this.log.add({ source: 'handleError', message: String((error as Error)?.message ?? error) });
    super.handleError(error);
  }

  override onViewError(error: Error, details: ErrorDetails) {
    this.log.add({
      source: 'onViewError',
      message: error.message,
      detail: `thrown in ${details.declarationType.name}, caught by a boundary in ${details.boundary?.type.name ?? 'unknown'}`,
    });
  }
}
