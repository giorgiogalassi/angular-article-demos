# Angular Forms - Validation and Form State (Part 3)

This repository contains working examples for Part 3 of an Angular Forms series.
It compares three approaches side by side using the same domain (`email` + `password`):

- Template-driven Forms
- Reactive Forms
- Signal Forms (experimental)

## What This Project Covers

- Baseline login form implementation in each approach
- Built-in validators (`required`, `email`)
- Form state handling patterns (`touched`, `invalid`, submit timing)
- UX behavior for showing validation messages and disabling actions

## Project Structure

Examples are grouped by approach:

- `src/app/forms/template-driven/`
- `src/app/forms/reactive/`
- `src/app/forms/signal-forms/`

Each approach has:

- A hub page (`*-forms-hub.component.ts`)
- Three examples:
  - `login-*`
  - `email-*`
  - `state-*`

## Routes

- `/forms/template-driven`
- `/forms/reactive`
- `/forms/signal-forms`

Each route has child pages: `login`, `email`, and `state`.

## Run Locally

```bash
npm install
npm start
```

Then open `http://localhost:4200/`.

Useful scripts:

- `npm start` - run dev server
- `npm run build` - production build
- `npm run watch` - development build in watch mode
- `npm test` - run unit tests

## Signal Forms Notice

Signal Forms APIs are still evolving. Examples are aligned with Angular 21 syntax, but future Angular releases may introduce API changes.
