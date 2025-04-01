import styled from 'styled-components';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

const ButtonStyled = styled.button<ButtonProps>`
    background-color: ${({theme, variant}) => theme.colors[variant || "primary"][500]};
    color: white;
    font-size: ${({theme}) => theme.typography.fontSize};
    font-weight: ${({theme}) => theme.typography.fontWeight};
    line-height: ${({theme}) => theme.typography.lineHeight};
    padding: ${({theme}) => theme.spacing.md};
    border: none;
    border-radius: ${({theme}) => theme.spacing.xs};
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: ${({theme, variant}) => theme.colors[variant || "primary"][600]};
    }
`;

export const Button: React.FC<ButtonProps> = ({ variant = "primary", children }) => {
    return <ButtonStyled variant={variant}>{children}</ButtonStyled>;
}