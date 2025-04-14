import React from 'react';
import styles from './Button.module.css';

/**
 * Defines the possible visual styles for the button.
 * - `primary`: Filled background with accent color.
 * - `secondary`: Outline style with accent color.
 */
type ButtonVariant = 'primary' | 'secondary';

/** Props for the Button component */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Content to render inside the button */
  children: React.ReactNode;
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Accent color for specific highlights (hex code) */
  accentColor?: string;
  /** Additional CSS class names */
  className?: string;
}

/** Default accent color (Cyan) */
const DEFAULT_ACCENT_COLOR = '#00FFFF';

/**
 * A futuristic HUD-style button component.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary', // Default to primary variant
  accentColor = DEFAULT_ACCENT_COLOR,
  className = '',
  style,
  ...rest
}) => {
  // Combine base styles, variant styles, and any custom className
  const buttonClasses = `
    ${styles.buttonBase}
    ${variant === 'primary' ? styles.primary : styles.secondary}
    ${className}
  `.trim();

  // Apply accent color using CSS custom properties
  const buttonStyle: React.CSSProperties = {
    ...style,
    '--button-accent-color': accentColor,
  };

  return (
    <button className={buttonClasses} style={buttonStyle} {...rest}>
      {children}
    </button>
  );
};
