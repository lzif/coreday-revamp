# Development Workflow

This document defines the standard workflow and strategy for developing the Coreday project. All feature development should follow this process to ensure consistency, quality, and measurable progress.

## Core Principle: Vertical Slices

We don't build layer by layer (like doing all the UI first). Instead, we build in "Vertical Slices." This means building a single feature completely—from the user interface (UI) all the way down to the data logic—before moving on to the next one.

**Workflow for Each Feature:**

1.  **Pick a Feature**: Choose one feature to work on from the priority list in `PROJECT_BRIEF.md`. Start with the simplest feature from the MVP scope, like the "Habit Tracker."

2.  **Build the Page (UI/Route)**: Create the main page file for the feature inside the `src/routes/` directory. For example: `src/routes/habits/+page.svelte`.

3.  **Create Components**:
    - Build feature-specific components inside the `src/lib/components/[feature-name]/` directory. For example: `src/lib/components/habits/HabitItem.svelte`.
    - Implement all logic and styling according to the `STYLE_GUIDE.md` and `SVELTE5_CONVENTION.md`.

4.  **Add Logic and Connect Data**:
    - Implement all the business logic needed for the feature.
    - Connect the components and pages to the `db` instance exported from `src/lib/db.ts` to perform CRUD (Create, Read, Update, Delete) operations.

## Iteration and Refactoring

Once a vertical slice is complete and working, move on to the next feature on the priority list.

During the development process, keep an eye out for the following:

- **Spot Common Patterns**: If you notice components (like buttons, modals, inputs) or functions that could be reused across multiple features, refactor them.
- **Move to a Common Location**:
  - Move reusable components to `src/lib/components/common/`.
  - Move utility functions (like date formatters or calculators) to `src/lib/utils/`.

The goal of this process is to build out functionality robustly while gradually creating a strong library of reusable components and utilities.
