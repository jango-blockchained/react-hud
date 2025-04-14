# React HUD

A React component library for creating futuristic, high-tech Heads-Up Display (HUD) interfaces.

Inspired by sci-fi visuals and cyberpunk aesthetics, this library provides reusable components to build visually striking UIs.

See the [Design Concept](./DESIGN_CONCEPT.md) for detailed visual guidelines and the [AI Agent Guide](./AI_AGENT_GUIDE.md) for implementation rules.

## Tech Stack

*   **Runtime:** [Bun](https://bun.sh/)
*   **Framework:** [React](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** CSS Modules (initially)
*   **Component Showcase:** [Storybook](https://storybook.js.org/)
*   **Linting:** [ESLint](https://eslint.org/)
*   **Formatting:** [Prettier](https://prettier.io/)

## Installation

```bash
bun add @your-npm-username/react-hud
```

*(Note: Replace `@your-npm-username/react-hud` with the actual package name once published.)*

## Basic Usage

```tsx
import React from 'react';
// Import components as they are developed, e.g.:
// import { FrameBox, DataReadout } from '@your-npm-username/react-hud';

function MyApp() {
  return (
    <div>
      {/* Example usage (once components exist):
      <FrameBox accentColor="#00FFFF">
        <DataReadout label="Status" value="Online" unit="" />
      </FrameBox>
      */}
      <p>React HUD components will go here!</p>
    </div>
  );
}

export default MyApp;
```

## Development

1.  **Install Dependencies:**
    ```bash
    bun install
    ```

2.  **Run Storybook:**
    ```bash
    bun run storybook
    ```
    This will usually open Storybook in your browser at `http://localhost:6006`.

3.  **Available Scripts:**
    *   `bun run build`: Builds the library for production.
    *   `bun run typecheck`: Checks TypeScript types.
    *   `bun run lint`: Lints the codebase.
    *   `bun run lint:fix`: Lints and attempts to fix issues.
    *   `bun run format`: Formats code using Prettier.
    *   `bun run format:check`: Checks code formatting.
    *   `bun run build-storybook`: Builds a static version of Storybook.

## Building the Library

To build the distributable files for the library, run:

```bash
bun run build
```

This will generate the necessary JavaScript (ES, UMD) and TypeScript definition files in the `dist` directory.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details (if one is added).
