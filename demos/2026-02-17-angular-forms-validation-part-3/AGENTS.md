# Repository Guidelines

## Project Structure & Module Organization
This is an Angular 21 learning project focused on form validation and form state patterns.
- App source: `src/`
- Root app shell: `src/app/` (`app.ts`, `app.html`, routes/config)
- Form examples by approach:
  - `src/app/forms/template-driven/`
  - `src/app/forms/reactive/`
  - `src/app/forms/signal-forms/`
- Static assets: `public/`
- Unit tests: `*.spec.ts` files colocated with source (example: `src/app/app.spec.ts`).

Keep new form examples grouped by approach and feature (for example, `register-reactive.component.ts`).

## Build, Test, and Development Commands
Run from repository root:
- `npm install` - install dependencies.
- `npm start` - start Angular dev server (`ng serve`) with development config.
- `npm run build` - production build output.
- `npm run watch` - development build in watch mode.
- `npm test` - run unit tests through Angular test builder.

## Coding Style & Naming Conventions
- Indentation: 2 spaces (`.editorconfig`).
- Encoding/newlines: UTF-8, final newline required, trim trailing whitespace.
- TypeScript quotes: single quotes.
- Prettier is configured in `package.json` (`printWidth: 100`, Angular parser for HTML).
- Naming:
  - Components: `feature-approach.component.ts` (kebab-case filenames).
  - Classes/types: `PascalCase`.
  - Variables/functions: `camelCase`.

## Testing Guidelines
- Framework style follows Angular `TestBed` specs in `*.spec.ts`.
- Keep tests next to the unit under test and mirror file names (for example, `login-reactive.component.spec.ts`).
- Prefer behavior-focused test names ("should ...").
- Run `npm test` before opening a PR.

## Commit & Pull Request Guidelines
Git history currently contains only `Initial commit`, so no strict convention is established yet.
Use short, imperative commit subjects and keep them scoped, for example:
- `feat(forms): add password minLength validation`
- `test(reactive): cover dirty/touched state transitions`

For pull requests, include:
- Clear summary of what changed and why.
- Linked issue/task (if available).
- Screenshots or short GIFs for UI/validation behavior changes.
- Confirmation that `npm test` and `npm run build` pass locally.
