# React HUD - AI Agent Implementation Guide

## 1. Core Directive

Implement React components for the `react-hud` library based on the visual specifications outlined in `DESIGN_CONCEPT.md`. Prioritize creating reusable, composable, and visually accurate components matching the futuristic HUD aesthetic.

## 2. Visual Implementation Rules

*   **Reference:** Strictly adhere to the aesthetics, elements, colors, and typography defined in `DESIGN_CONCEPT.md`.
*   **Styling:** Use CSS Modules (`.module.css`) or Tailwind CSS utility classes for styling. If using Tailwind, configure `tailwind.config.js` with the project's color palette and preferred fonts.
    *   _Decision:_ Let's start with CSS Modules for better encapsulation unless Tailwind becomes more convenient later. Create CSS Module files alongside components (e.g., `FrameBox.tsx` and `FrameBox.module.css`).
*   **Color Usage:** Apply the defined primary background/foreground and 1-3 accent colors consistently. Use hex codes specified in the concept.
*   **Geometry & Shapes:** Implement elements using HTML/CSS where possible. For complex shapes, intricate borders, or elements requiring precise scaling, use inline SVG or separate SVG components.
*   **Responsiveness:** While HUDs are often fixed, consider basic responsiveness where applicable (e.g., text wrapping in data readouts). Primarily focus on scalable vector graphics (SVG) if used.
*   **Animation:** Implement subtle animations (hover, loading) using CSS transitions or keyframes. Avoid complex JavaScript animation libraries unless necessary for specific effects (like intricate scanning). Adhere to the animation style described in the concept.

## 3. Component Structure & Technical Rules

*   **Technology:** Use React with TypeScript (`.tsx`).
*   **Component Type:** Implement components as Function Components using React Hooks.
*   **Props:** Define explicit `Props` interfaces for each component using TypeScript. Include TSDoc comments explaining each prop.
    *   Example:
        ```typescript
        /** Props for the FrameBox component */
        interface FrameBoxProps {
          /** Content to render inside the frame */
          children?: React.ReactNode;
          /** Accent color for specific highlights (optional) */
          accentColor?: string; // Use defined palette colors
          /** Additional CSS class names */
          className?: string;
        }
        ```
*   **Composability:** Design components to be composable (e.g., a `FrameBox` should accept `children`).
*   **Exports:** Export all created components from the main library entry point (`src/index.ts`).
*   **File Structure:** Place each component in its own directory within `src/components/` (e.g., `src/components/FrameBox/FrameBox.tsx`, `src/components/FrameBox/FrameBox.module.css`). Create `src/components/index.ts` to re-export all components from this directory.
*   **Entry Point (`src/index.ts`):** This file should only export the library's public API (the components).

## 4. Implementation Guidelines

*   **Modularity:** Create small, focused components.
*   **Reusability:** Design props flexibly to allow reuse in different contexts.
*   **Readability:** Write clean, well-formatted code.
*   **TSDoc:** Add TSDoc comments for exported components, types, and complex internal logic.
*   **Accessibility (Basic):** While highly stylized UIs can be challenging, include basic ARIA attributes (`role`, `aria-label`, etc.) where they make sense, especially for interactive elements or data displays.

## 5. Initial Components to Implement (Suggestions)

1.  `Corner`: Renders a single corner bracket. Props: `position` (e.g., 'top-left'), `size`, `color`, `className`.
2.  `FrameBox`: Uses `Corner` or direct styling to create a framed container. Props: `children`, `padding`, `accentColor`, `className`.
3.  `DataReadout`: Displays a label and value. Props: `label`, `value`, `unit`, `accentColor`, `className`. 