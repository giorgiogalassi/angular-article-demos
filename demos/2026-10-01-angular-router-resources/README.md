# Router Resources vs Resolvers (Angular 22.2)

Demo for the article *Angular v22.2: Router Resources vs Resolvers*. Router Resources are `@developerPreview 22.2`.

Both routes load the same data with fixed delays (`user` 800ms on the parent, `posts` 800ms on a child route, `activity` 1500ms). The timeline on the right logs when each request starts and ends.

## What to try

1. **Parallel vs sequential.** Open *Router Resources → user 1*: `user` and `posts` start together and the page is ready after ~800ms. Open *Resolvers → user 1*: `posts` only starts after `user` finishes, ~1600ms.
2. **Blocking vs non-blocking.** `activity` is wrapped in `nonBlocking()`: the page renders first and the feed fills in later. Its component input is the whole `Resource`, while `user`'s input is the plain value.
3. **Failures.** Tick *fail activity*: the navigation still completes and the template shows `error()`. Tick *fail user*: the router cancels the navigation with `NavigationError` and the previous page stays.
4. **reload() without re-navigating.** *Reload user* calls `ActivatedRoute.resources['user'].reload()`. No guards rerun, no route is rematched.
5. **A failed reload on a blocking resource.** Tick *fail user*, then *Reload user*. The input has no value to receive, so `ResourceValueError` is thrown on the active page. The `@boundary` around `<router-outlet>` in `app.ts` catches it. `$reset()` alone fails again because the resource is still in error. Untick *fail user* and use *Reload failed resources, then $reset()*.

Key files: `src/app/app.routes.ts` (both route styles), `src/app/app.config.ts` (`withRouterResources()`), `src/app/pages/user-profile.ts`.

```bash
npm ci
npm start
```
