# Coreday Project Structure

This document breaks down the directory structure and explains the purpose of every important file and folder in the Coreday project.

## Root Directory

The main folder holds high-level configuration and documentation.

- **Documentation (`.md`)**: All Markdown files (`README.md`, `PROJECT_BRIEF.md`, `STYLE_GUIDE.md`, etc.) act as the source of truth for the project's definitions, rules, and workflows.
- **Configuration (`.js`, `.json`, `.ts`)**: Files like `svelte.config.js`, `vite.config.ts`, and `package.json` control how SvelteKit, Vite, and TypeScript compile and run the app, as well as manage dependencies.
- **`specs/`**: This directory contains detailed technical specifications for each component we plan to build.

---

## `src` Directory (Source Code)

This is the main directory where all of the application's source code lives.

- **`src/routes/`**: This is the most important directory for the app's structure. SvelteKit uses file-based routing, which means every folder here (like `/finance` or `/habits`) automatically becomes a page or "route" in the app.
    - `+page.svelte` is the file that gets rendered for a route.
    - `+layout.svelte` defines a shared layout for pages within the same segment.
- **`src/lib/`**: This contains reusable code that can be used across the entire application.
    - **`src/lib/components/`**: Where all Svelte components live.
        - `/common`: For generic components like Buttons, Modals, and Inputs.
        - `/[feature]`: For components specific to one feature, like `/finance` or `/habits`.
    - **`src/lib/db.ts`**: A crucial file that defines the entire local database schema (using Dexie.js).
    - **`src/lib/utils/`**: Contains reusable helper functions, for things like formatting dates or currency.
- **`app.html`**: The main HTML shell of the application.
- **`app.css`**: For global CSS styles.

---

## `static` Directory

This directory holds static assets that aren't processed by Vite. Files here are copied directly to the final build output folder, like `favicon.png` or `manifest.json`.