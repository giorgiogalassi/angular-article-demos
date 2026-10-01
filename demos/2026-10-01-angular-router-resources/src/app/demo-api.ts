import { Injectable, signal } from '@angular/core';

export interface User {
  id: string;
  name: string;
}

export interface Activity {
  id: number;
  text: string;
}

export interface Post {
  id: number;
  title: string;
}

export interface LogEntry {
  at: number;
  message: string;
}

const USERS: Record<string, string> = {
  '1': 'Ada Lovelace',
  '2': 'Grace Hopper',
  '3': 'Margaret Hamilton',
};

/**
 * A fake backend with fixed delays, so the timeline shows when each request
 * starts and ends. The `fail*` toggles make a request reject on purpose.
 */
@Injectable({ providedIn: 'root' })
export class DemoApi {
  readonly failUser = signal(false);
  readonly failActivity = signal(false);
  readonly log = signal<LogEntry[]>([]);

  private startedAt = performance.now();

  resetTimeline() {
    this.startedAt = performance.now();
    this.log.set([]);
  }

  getUser(id: string, abortSignal?: AbortSignal): Promise<User> {
    return this.request(`user ${id}`, 800, abortSignal, () => {
      if (this.failUser()) throw new Error(`User ${id} could not be loaded`);
      return { id, name: USERS[id] ?? `User ${id}` };
    });
  }

  getActivity(id: string, abortSignal?: AbortSignal): Promise<Activity[]> {
    return this.request(`activity ${id}`, 1500, abortSignal, () => {
      if (this.failActivity()) throw new Error('Activity service is down');
      return [
        { id: 1, text: `${USERS[id] ?? 'User'} opened a pull request` },
        { id: 2, text: 'Left a review comment' },
      ];
    });
  }

  getPosts(id: string, abortSignal?: AbortSignal): Promise<Post[]> {
    return this.request(`posts ${id}`, 800, abortSignal, () => [
      { id: 1, title: `Notes from user ${id}` },
      { id: 2, title: 'Signals all the way down' },
    ]);
  }

  private request<T>(label: string, ms: number, abortSignal: AbortSignal | undefined, result: () => T): Promise<T> {
    this.write(`▶ ${label} started`);
    return new Promise<T>((resolve, reject) => {
      const onAbort = () => {
        clearTimeout(timer);
        this.write(`⏹ ${label} aborted`);
        reject(abortSignal!.reason);
      };
      const timer = setTimeout(() => {
        abortSignal?.removeEventListener('abort', onAbort);
        try {
          const value = result();
          this.write(`✔ ${label} done`);
          resolve(value);
        } catch (e) {
          this.write(`✖ ${label} failed`);
          reject(e);
        }
      }, ms);
      abortSignal?.addEventListener('abort', onAbort, { once: true });
    });
  }

  private write(message: string) {
    const at = Math.round(performance.now() - this.startedAt);
    this.log.update((entries) => [...entries, { at, message }]);
  }
}
