import { type FC, type ReactNode, type CSSProperties } from 'react';
import { Corner } from '../Corner/Corner'; // Import the Corner component
import styles from './FrameBox.module.css';

/** Props for the FrameBox component */
interface FrameBoxProps {
  /** Content to render inside the frame */
  children?: ReactNode;
  /** Inner padding of the box (e.g., '1rem', '20px') */
  padding?: string;
  /** Accent color for the corners (hex code) */
  accentColor?: string;
  /** Size of the corner elements (e.g., '16px') */
  cornerSize?: string;
  /** Thickness of the corner lines (e.g., '2px') */
  cornerThickness?: string;
  /** Background color for the box content area */
  backgroundColor?: string;
  /** Additional CSS class names for the main container */
  className?: string;
  /** Inline styles for the main container */
  style?: CSSProperties;
}

/** Default values */
const DEFAULT_PADDING = '1rem';
const DEFAULT_ACCENT_COLOR = '#00FFFF'; // Default to Cyan
const DEFAULT_CORNER_SIZE = '16px';
const DEFAULT_CORNER_THICKNESS = '2px';
const DEFAULT_BACKGROUND_COLOR = 'rgba(0, 20, 30, 0.1)'; // Subtle dark blueish background

/**
 * A container component that renders content within a stylized HUD frame
 * created using four Corner components.
 */
export const FrameBox: FC<FrameBoxProps> = ({
  children,
  padding = DEFAULT_PADDING,
  accentColor = DEFAULT_ACCENT_COLOR,
  cornerSize = DEFAULT_CORNER_SIZE,
  cornerThickness = DEFAULT_CORNER_THICKNESS,
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
  className = '',
  style,
}) => {
  const frameBoxClasses = `
    ${styles.frameBoxBase}
    ${className}
  `.trim();

  const frameBoxStyle: CSSProperties = {
    ...style,
    padding: padding,
    backgroundColor: backgroundColor,
    // Pass color to corners via props, or could use CSS variables if preferred
  };

  return (
    <div className={frameBoxClasses} style={frameBoxStyle}>
      {/* Render the four corners */}
      <Corner
        position="top-left"
        size={cornerSize}
        thickness={cornerThickness}
        color={accentColor}
      />
      <Corner
        position="top-right"
        size={cornerSize}
        thickness={cornerThickness}
        color={accentColor}
      />
      <Corner
        position="bottom-left"
        size={cornerSize}
        thickness={cornerThickness}
        color={accentColor}
      />
      <Corner
        position="bottom-right"
        size={cornerSize}
        thickness={cornerThickness}
        color={accentColor}
      />
      {/* Render the actual content */}
      <div className={styles.contentArea}>{children}</div>
    </div>
  );
};
