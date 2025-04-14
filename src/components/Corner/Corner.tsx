import { type FC, type CSSProperties } from 'react';
import styles from './Corner.module.css';

/** Defines the position of the corner bracket */
type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

/** Props for the Corner component */
interface CornerProps {
  /** Specifies which corner to render */
  position: CornerPosition;
  /** Size of the corner lines (e.g., '20px', '1.5em') */
  size?: string;
  /** Thickness of the corner lines (e.g., '2px') */
  thickness?: string;
  /** Color of the corner */
  color?: string;
  /** Additional CSS class names */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
}

/** Default values */
const DEFAULT_SIZE = '16px';
const DEFAULT_THICKNESS = '2px';
const DEFAULT_COLOR = '#00FFFF'; // Default to Cyan

/**
 * Renders a single geometric corner bracket element.
 */
export const Corner: FC<CornerProps> = ({
  position,
  size = DEFAULT_SIZE,
  thickness = DEFAULT_THICKNESS,
  color = DEFAULT_COLOR,
  className = '',
  style,
}) => {
  const cornerClasses = `
    ${styles.cornerBase}
    ${styles[position]}
    ${className}
  `.trim();

  const cornerStyle: CSSProperties = {
    ...style,
    '--corner-size': size,
    '--corner-thickness': thickness,
    '--corner-color': color,
  };

  return <div className={cornerClasses} style={cornerStyle} aria-hidden="true" />;
};
