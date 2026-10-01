# @boundary in practice (Angular 22.2)

Demo for the article *Angular v22.2: @boundary in practice*. `@boundary` is in developer preview since Angular 22.2.

Every caught error is also reported to a custom `ErrorHandler` (`src/app/error-log.ts`) and shown in the log at the bottom of the page.

## What to try

1. **`$error` and `$reset()`.** Make the chart throw. *Try again* only recovers once the cause is gone.
2. **Several `@error` blocks with `when`.** Throw a `ChartError` and you get the chart-specific fallback. Throw a plain `Error`, then *Retry*, and you get the generic one. While a fallback is showing, the primary block doesn't re-render until `$reset()`.
3. **An errored `resource()`.** `order.value()` throws while the resource is in error, and the boundary catches it. The *loading guard* checkbox shows why the guard matters: without it, `value()` is `undefined` while loading, the child crashes on first load, and `order.reload(); $reset()` resets too early and lands back in the fallback. *Reload, wait, then $reset()* works either way.
4. **Event handlers aren't caught.** The click error goes to `ErrorHandler.handleError`, and the boundary stays as it was.

## Gotcha

`ErrorHandler.onViewError` runs synchronously while Angular renders. Writing a signal there throws `NG0600` and breaks the boundary, so `ErrorLog.add()` defers the write with `queueMicrotask`.

```bash
npm ci
npm start
```
