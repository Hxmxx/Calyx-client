import React from 'react';
import styled from '@emotion/styled';
import { THEME } from '../../styles/theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${THEME.spacing[2]};
  border: none;
  border-radius: ${THEME.borderRadius['2xl']};
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-weight: ${THEME.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${THEME.transitions.smooth};
  position: relative;
  overflow: hidden;

  /* Size variants */
  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return `
          padding: ${THEME.spacing[2]} ${THEME.spacing[4]};
          font-size: ${THEME.typography.fontSize.sm};
          min-height: 36px;
        `;
      case 'lg':
        return `
          padding: ${THEME.spacing[4]} ${THEME.spacing[8]};
          font-size: ${THEME.typography.fontSize.lg};
          min-height: 56px;
        `;
      default:
        return `
          padding: ${THEME.spacing[3]} ${THEME.spacing[6]};
          font-size: ${THEME.typography.fontSize.base};
          min-height: 44px;
        `;
    }
  }}

  /* Width */
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  /* Variants */
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background: ${THEME.colors.Calyx.Gradient.Primary};
          color: white;
          box-shadow: ${THEME.shadows.calyx.soft};
          
          &:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: ${THEME.shadows.calyx.glow};
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
      case 'secondary':
        return `
          background: ${THEME.colors.Calyx.Gradient.Secondary};
          color: ${THEME.colors.Calyx.Text.Primary};
          box-shadow: ${THEME.shadows.calyx.soft};
          
          &:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: ${THEME.shadows.calyx.glow};
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: ${THEME.colors.Calyx.Text.Primary};
          border: 2px solid ${THEME.colors.Calyx.Text.Light};
          
          &:hover:not(:disabled) {
            background: ${THEME.colors.Calyx.Accent.Purple};
            border-color: ${THEME.colors.Calyx.Primary};
            color: ${THEME.colors.Calyx.Primary};
          }
        `;
      case 'glass':
        return `
          background: ${THEME.colors.Calyx.Glass.Surface};
          backdrop-filter: blur(10px);
          border: 1px solid ${THEME.colors.Calyx.Glass.Border};
          color: ${THEME.colors.Calyx.Text.Primary};
          box-shadow: ${THEME.shadows.calyx.glass};
          
          &:hover:not(:disabled) {
            background: ${THEME.colors.Calyx.Glass.Background};
            transform: translateY(-1px);
            box-shadow: ${THEME.shadows.calyx.soft};
          }
        `;
    }
  }}

  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }

  /* Pulse animation for CTA buttons */
  &.pulse {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(96, 113, 241, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(96, 113, 241, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(96, 113, 241, 0);
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className,
  fullWidth = false,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={className}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
