import { computed, inject, resource } from '@angular/core';
import { nonBlocking, ResolveFn, Routes } from '@angular/router';
import { DemoApi, Post, User } from './demo-api';
import { Home } from './pages/home';
import { UserProfile } from './pages/user-profile';
import { UserPosts } from './pages/user-posts';
import { ResolverProfile } from './pages/resolver-profile';
import { ResolverPosts } from './pages/resolver-posts';

// ─── Router Resources ────────────────────────────────────────────────────────
// Parent and child resources start at the same time.

const routerResourcesRoutes: Routes = [
  {
    path: 'resources/users/:id',
    component: UserProfile,
    resources: (ctx) => {
      const api = inject(DemoApi);
      // Read the key, not the whole params object. On 22.2.3 a plain `() => ctx.params()['id']`
      // still reruns the loaders on every navigation of this route (a query param or fragment
      // change is enough). A computed() doesn't. Upstream fix: angular/angular@fe02c34c3c, not
      // released as of 22.2.3.
      const id = computed(() => ctx.params()['id']);
      return {
        // blocking (default): navigation waits, the input receives the value
        user: resource({
          params: id,
          loader: ({ params: id, abortSignal }) => api.getUser(id, abortSignal),
        }),
        // non-blocking: navigation completes, the input receives the Resource
        activity: nonBlocking(
          resource({
            params: id,
            loader: ({ params: id, abortSignal }) => api.getActivity(id, abortSignal),
          }),
        ),
      };
    },
    children: [
      {
        path: 'posts',
        component: UserPosts,
        resources: (ctx) => {
          const api = inject(DemoApi);
          const id = computed(() => ctx.params()['id']);
          return {
            posts: resource({
              params: id,
              loader: ({ params: id, abortSignal }) => api.getPosts(id, abortSignal),
            }),
          };
        },
      },
    ],
  },
];

// ─── Resolvers (for comparison) ──────────────────────────────────────────────
// The child resolver only starts once the parent resolver has finished.

const resolveUser: ResolveFn<User> = (route) => inject(DemoApi).getUser(route.paramMap.get('id')!);
const resolvePosts: ResolveFn<Post[]> = (route) => inject(DemoApi).getPosts(route.paramMap.get('id')!);

const resolverRoutes: Routes = [
  {
    path: 'resolvers/users/:id',
    component: ResolverProfile,
    resolve: { user: resolveUser },
    children: [{ path: 'posts', component: ResolverPosts, resolve: { posts: resolvePosts } }],
  },
];

export const routes: Routes = [
  { path: '', component: Home },
  ...routerResourcesRoutes,
  ...resolverRoutes,
  { path: '**', redirectTo: '' },
];
