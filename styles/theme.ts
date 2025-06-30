// Calyx Theme Configuration
// 컨텐츠 크리에이터 플랫폼을 위한 디자인 시스템

// Common values
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
} as const;

export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
} as const;

export const FONT_FAMILY = {
  SFPro: 'SF Pro',
  Pretendard: 'Pretendard Variable',
  Inter: 'Inter',
} as const;

export const THEME = {
  colors: {
    Primary: {
      Light: '#E6F0FF',
      Light_hover: '#D9E7FF',
      Light_active: '#B3CCFF',
      Normal: '#1E40AF',
      Normal_hover: '#1B3A9E',
      Normal_active: '#18348C',
      Dark: '#1E3A8A',
      Dark_hover: '#172554',
      Dark_active: '#0F172A',
      Darker: '#0B1426',
    },
    Secondary: {
      Light: '#FFFBFC',
      Light_hover: '#FFF9FA',
      Light_active: '#FFF3F5',
      Normal: '#FFD7E0',
      Normal_hover: '#E6C2CA',
      Normal_active: '#CCACB3',
      Dark: '#BFA1A8',
      Dark_hover: '#998186',
      Dark_active: '#736165',
      Darker: '#594B4E',
    },
    Semantic: {
      Info: '#3B82F6', // Blue
      Success: '#10B981', // Green
      Warning: '#F59E0B', // Amber
      Error: '#EF4444', // Red
    },
    Text: {
      Dark: '#000000',
      White: '#2B2B2F',
      Disabled: {
        Color: '#000000',
        Opacity: '0.3',
      },
    },
    Glass: {
      Background: {
        Color: '#FFFFFF',
        Opacity: '0.1',
      },
      Surface: {
        Color: '#FFFFFF',
        Opacity: '0.3',
      },
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    32: '8rem', // 128px
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Consolas', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    base: '0.25rem', // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    '2xl': '1rem', // 16px
    '3xl': '1.5rem', // 24px
    full: '9999px',
  },
  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },
} as const;

// 타입 정의
export type Theme = typeof THEME;
export type ColorKey = keyof typeof THEME.colors;
export type SpacingKey = keyof typeof THEME.spacing;
export type FontSizeKey = keyof typeof THEME.typography.fontSize;
export type FontWeightKey = keyof typeof THEME.typography.fontWeight;

// 유틸리티 함수들
export const getColor = (colorKey: string) => {
  const keys = colorKey.split('.');
  let value: any = THEME.colors;

  for (const key of keys) {
    value = value[key];
    if (!value) break;
  }

  return value || THEME.colors.Semantic.Info;
};

export const getSpacing = (spacingKey: SpacingKey) => {
  return THEME.spacing[spacingKey];
};

export const getFontSize = (sizeKey: FontSizeKey) => {
  return THEME.typography.fontSize[sizeKey];
};

export const getFontWeight = (weightKey: FontWeightKey) => {
  return THEME.typography.fontWeight[weightKey];
};

// 미디어 쿼리 헬퍼
export const mediaQuery = {
  sm: `@media (min-width: ${BREAKPOINTS.mobile})`,
  md: `@media (min-width: ${BREAKPOINTS.tablet})`,
  lg: `@media (min-width: ${BREAKPOINTS.desktop})`,
  xl: `@media (min-width: ${BREAKPOINTS.wide})`,
};

// 기존 코드와의 호환성을 위한 별칭
export const theme = THEME;
export default THEME;
