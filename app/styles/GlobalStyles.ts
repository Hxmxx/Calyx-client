import { css } from '@emotion/react';
import { THEME } from './Theme';

export const globalStyles = css`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'SF Pro', 'Pretendard', sans-serif;
    }

    :root {
        --primary-50: ${THEME.colors.Primary.Light};
        --primary-100: ${THEME.colors.Primary.Light_hover};
        --primary-200: ${THEME.colors.Primary.Light_active};
        --primary-300: ${THEME.colors.Primary.Normal};
        --primary-400: ${THEME.colors.Primary.Normal_hover};
        --primary-500: ${THEME.colors.Primary.Normal};
        --primary-600: ${THEME.colors.Primary.Normal_hover};
        --primary-700: ${THEME.colors.Primary.Normal_active};
        --primary-800: ${THEME.colors.Primary.Dark};
        --primary-900: ${THEME.colors.Primary.Dark_hover};

        --secondary-50: ${THEME.colors.Secondary.Light};
        --secondary-100: ${THEME.colors.Secondary.Light_hover};
        --secondary-200: ${THEME.colors.Secondary.Light_active};
        --secondary-300: ${THEME.colors.Secondary.Normal};
        --secondary-400: ${THEME.colors.Secondary.Normal_hover};
        --secondary-500: ${THEME.colors.Secondary.Normal};
        --secondary-600: ${THEME.colors.Secondary.Normal_hover};
        --secondary-700: ${THEME.colors.Secondary.Normal_active};
        --secondary-800: ${THEME.colors.Secondary.Dark};
        --secondary-900: ${THEME.colors.Secondary.Dark_hover};

        --semantic-info: ${THEME.colors.Semantic.Info};
        --semantic-success: ${THEME.colors.Semantic.Success};
        --semantic-warning: ${THEME.colors.Semantic.Warning};
        --semantic-error: ${THEME.colors.Semantic.Error};

        --text-dark: ${THEME.colors.Text.Dark};
        --text-white: ${THEME.colors.Text.White};
        --text-disabled: ${THEME.colors.Text.Disabled.Color};

        --glass-background-color: ${THEME.colors.Glass.Background.Color};
        --glass-background-opacity: ${THEME.colors.Glass.Background.Opacity};
        --glass-surface-color: ${THEME.colors.Glass.Surface.Color};
        --glass-surface-opacity: ${THEME.colors.Glass.Surface.Opacity};

        --spacing-xs: ${THEME.spacing.xs};
        --spacing-sm: ${THEME.spacing.sm};
        --spacing-md: ${THEME.spacing.md};
        --spacing-lg: ${THEME.spacing.lg};
        --spacing-xl: ${THEME.spacing.xl};
        --spacing-xxl: ${THEME.spacing.xxl};
        --spacing-xxxl: ${THEME.spacing.xxxl};
        --spacing-xxxxl: ${THEME.spacing.xxxxl};
        --spacing-xxxxxl: ${THEME.spacing.xxxxxl};
        --spacing-xxxxxxl: ${THEME.spacing.xxxxxxl};

        --typography-display-font-size: ${THEME.typography.Display.fontSize};
        --typography-display-font-weight: ${THEME.typography.Display.fontWeight};
        --typography-heading-font-size: ${THEME.typography.Heading.fontSize};
        --typography-heading-font-weight: ${THEME.typography.Heading.fontWeight};
        --typography-body-font-size: ${THEME.typography.Body.fontSize};
        --typography-body-font-weight: ${THEME.typography.Body.fontWeight};
        --typography-caption-font-size: ${THEME.typography.Caption.fontSize};
        --typography-caption-font-weight: ${THEME.typography.Caption.fontWeight};
    }
`;