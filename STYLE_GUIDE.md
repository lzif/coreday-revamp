# Style Guide: Coreday

## 1. General Tone
The visual identity is **clean**, **minimalist**, and **functional**. The design should feel calm, organized, and data-focused. We prioritize clarity and usability over decorative elements.

---

## 2. Color Palette
The palette is designed for clarity and has a limited number of colors to maintain a clean aesthetic.

| Name          | Role                       | Hex Code  | Tailwind Utility         |
|---------------|----------------------------|-----------|--------------------------|
| Background    | App background             | `#f9fafb` | `bg-gray-50`             |
| Foreground    | Main text color            | `#111827` | `text-gray-900`          |
| Muted         | Secondary text, borders    | `#9ca3af` | `text-gray-400` / `border-gray-400` |
| Card          | Card/surface background    | `#ffffff` | `bg-white`               |
| Primary       | Brand, active links, buttons | `#2563eb` | `bg-blue-600` / `text-blue-600` |
| Accent        | Hover states, highlights   | `#3b82f6` | `bg-blue-500`            |
| Destructive   | Delete actions, errors     | `#dc2626` | `bg-red-600` / `text-red-600` |
| Success       | Confirmation, success      | `#16a34a` | `bg-green-600` / `text-green-600` |

---

## 3. Typography
- **Font Family**: **Inter**, with `sans-serif` as a fallback.
- **Base Font Size**: 16px.

| Element         | Font Size | Font Weight | Tailwind Utility     |
|-----------------|-----------|-------------|----------------------|
| Heading 1 (h1)  | 2.25rem   | 700 (Bold)  | `text-4xl font-bold` |
| Heading 2 (h2)  | 1.875rem  | 700 (Bold)  | `text-3xl font-bold` |
| Heading 3 (h3)  | 1.5rem    | 600 (Semi-Bold) | `text-2xl font-semibold` |
| Body (p)        | 1rem      | 400 (Regular) | `text-base font-normal`|
| Small           | 0.875rem  | 400 (Regular) | `text-sm font-normal`|

---

## 4. Spacing & Layout
A consistent spacing scale is used for all `padding`, `margin`, and `gap` properties to ensure visual rhythm. The base unit is `1rem = 16px`.
- **Scale**: `0.25rem` (4px), `0.5rem` (8px), `0.75rem` (12px), `1rem` (16px), `1.5rem` (24px), `2rem` (32px).
- **Layout**: The main content area should have a maximum width of `1280px` (`max-w-7xl`) and be centered on the page.

---

## 5. Borders & Radius
- **Borders**: `1px` solid, using the `Muted` color (`#9ca3af` or `border-gray-400`).
- **Radius**:
  - **Small**: `0.25rem` (`rounded-sm`) - for tags, badges.
  - **Medium**: `0.5rem` (`rounded-lg`) - for buttons, inputs, cards.
  - **Large**: `0.75rem` (`rounded-xl`) - for larger containers or modals.

---

## 6. Component States
- **Focus**: All interactive elements must have a clear focus state for accessibility. Use a `2px` solid ring in the `Primary` color (`ring-2 ring-blue-600`) with an offset (`ring-offset-2`).
- **Hover**: Interactive elements should typically become slightly lighter or darker to provide feedback. For primary buttons, use the `Accent` color on hover.
- **Disabled**: Disabled elements should have reduced opacity (`opacity-50`) and use the `not-allowed` cursor.
