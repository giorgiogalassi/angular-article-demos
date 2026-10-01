# Angular Article Demos

Runnable demos for my Angular articles, one folder per article, each openable on StackBlitz.

Every folder in `demos/` is a **standalone project** with its own `package.json`, lockfile and Angular version. There is no shared workspace on purpose: each demo stays on the Angular version its article was written for, and StackBlitz opens a single folder as the project root.

## Demos

| Demo | Angular | Article(s) | Open |
|---|---|---|---|
| [`2024-04-28-angular-di-resolution-modifiers`](demos/2024-04-28-angular-di-resolution-modifiers) | 17 | [Understanding Angular — Exploring Dependency Injection and Design Patterns (Part 1)](https://medium.com/p/1eaaa367244b) | [StackBlitz](https://stackblitz.com/github/giorgiogalassi/angular-article-demos/tree/main/demos/2024-04-28-angular-di-resolution-modifiers?file=src/main.ts) |
| [`2024-11-11-angular-defer`](demos/2024-11-11-angular-defer) | 19 | [Understanding @defer (Part 1)](https://dev.to/ggalassi/angular-v18-understanding-defer-blocks-triggers-and-deferrable-views-part-1-1m56) · [Part 2](https://dev.to/ggalassi/angular-v19-understanding-defer-blocks-triggers-and-deferrable-views-part-2-31kj) | [StackBlitz](https://stackblitz.com/github/giorgiogalassi/angular-article-demos/tree/main/demos/2024-11-11-angular-defer?file=src/main.ts) |
| [`2024-12-03-angular-resource-rxresource`](demos/2024-12-03-angular-resource-rxresource) | 19 | [Understanding the New resource() and rxResource() APIs](https://dev.to/ggalassi/angular-v19-understanding-the-new-resource-and-rxresource-apis-3393) · [Understanding the New httpResource() API](https://dev.to/ggalassi/angular-v19-understanding-the-new-httpresource-api-23h) | [StackBlitz](https://stackblitz.com/github/giorgiogalassi/angular-article-demos/tree/main/demos/2024-12-03-angular-resource-rxresource?file=src/main.ts) |
| [`2026-01-26-angular-forms-data-flow-part-2`](demos/2026-01-26-angular-forms-data-flow-part-2) | 21 | [Angular Forms — Data Flow and Working with Inputs (Part 2)](https://medium.com/@giorgio.galassi/angular-forms-data-flow-and-working-with-inputs-part-2-006f623a45ea) | [StackBlitz](https://stackblitz.com/github/giorgiogalassi/angular-article-demos/tree/main/demos/2026-01-26-angular-forms-data-flow-part-2?file=src/main.ts) |
| [`2026-02-17-angular-forms-validation-part-3`](demos/2026-02-17-angular-forms-validation-part-3) | 21 | [Angular Forms — Validation and Form State (Part 3)](https://medium.com/@giorgio.galassi/angular-forms-validation-and-form-state-part-3-0f2db5b4961e) | [StackBlitz](https://stackblitz.com/github/giorgiogalassi/angular-article-demos/tree/main/demos/2026-02-17-angular-forms-validation-part-3?file=src/app/app.ts) |
| [`2026-07-09-angular-forms-advanced-patterns-part-4`](demos/2026-07-09-angular-forms-advanced-patterns-part-4) | 22 | [Angular Forms — Advanced Patterns (Part 4)](https://medium.com/@giorgio.galassi/angular-forms-advanced-patterns-part-4-1de423db0671) | [StackBlitz](https://stackblitz.com/github/giorgiogalassi/angular-article-demos/tree/main/demos/2026-07-09-angular-forms-advanced-patterns-part-4?file=src/app/app.ts) |

## Running a demo locally

```bash
cd demos/<demo>
npm ci
npm start
```

## Adding a demo

1. Create `demos/<YYYY-MM-DD-slug>/` as a complete Angular project (`ng new` inside the folder, no workspace at the root).
2. Commit its `package-lock.json` and add a `.stackblitzrc`:
   ```json
   { "installDependencies": true, "startCommand": "npm start" }
   ```
3. Add a row to the table above.
4. On the article's publish day, tag the repo (`git tag <slug>`) and link the article to
   `https://stackblitz.com/github/giorgiogalassi/angular-article-demos/tree/<slug>/demos/<slug>` so later changes never alter what the article shows.

## Rules

- **No automated dependency upgrades.** A version bump changes what the article demonstrates. Upgrade a demo only together with its article.
- **CI builds every demo** on each push (`.github/workflows/build.yml`), so a broken demo shows up here before a reader finds it.

## History

These demos used to live in separate repositories (`resource`, `defer`, `resolution-modifiers`, `angular-forms-*`). They were imported with full git history via `git subtree`. The original repositories stay online so links in already-published articles keep working.
