# React HUD

A React component library for creating futuristic, high-tech Heads-Up Display (HUD) interfaces.

Inspired by sci-fi visuals and cyberpunk aesthetics, this library provides reusable components to build visually striking UIs.

See the [Design Concept](./DESIGN_CONCEPT.md) for detailed visual guidelines and the [AI Agent Guide](./AI_AGENT_GUIDE.md) for implementation rules.

## Installation

```bash
npm install @your-npm-username/react-hud
# or
yarn add @your-npm-username/react-hud
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

## Building the Library

To build the distributable files for the library, run:

```bash
npm run build
```

This will generate the necessary JavaScript (ES, UMD) and TypeScript definition files in the `dist` directory.

## Development

*   **Linting:** `npm run lint`
*   **Type Checking:** `npm run typecheck`

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details (if one is added).
