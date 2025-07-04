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

export const THEME = {
  colors: {
      Primary: {
          Light : "#EDF5F4",
          Light_hover: "#E4F0EE",
          Light_active: "#C7E0DC",
          Normal: "#4A9B8E",
          Normal_hover: "#438C80",
          Normal_active: "#3B7C72",
          Dark: "#38746B",
          Dark_hover: "#2C5D55",
          Dark_active: "#214640",
          Darker: "#1A3632",
      },
      Secondary: {
          Light: "#FDFBF8",
          Light_hover: "#FBF9F4",
          Light_active: "#F7F2E9",
          Normal: "#E6D5B7",
          Normal_hover: "#CFC0A5",
          Normal_active: "#B8AA92",
          Dark: "#ADA089",
          Dark_hover: "#8A806E",
          Dark_active: "#676052",
          Darker: "#514B40",
      },
      Semantic: {
          Info: "#3B82F6", // Blue
          Success: "#10B981", // Green
          Warning: "#F59E0B", // Amber
          Error: "#EF4444", // Red
      },
      Text: {
          Dark: "#000000",
          White: "#2B2B2F",
          Disabled: {
              Color: "#000000",
              Opacity: "0.3"
          },
      },
      Glass: {
          Background: {
              Color: "#FFFFFF",
              Opacity: "0.1"
          },
          Surface: {
              Color: "#FFFFFF",
              Opacity: "0.3"
          }
      },
  },
  spacing: {
      xs: "0.25rem", // 4px
      sm: "0.5rem", // 8px
      md: "0.75rem", // 12px
      lg: "1rem", // 16px
      xl: "1.25rem", // 20px
      xxl: "1.5rem", // 24px
      xxxl: "1.75rem", // 28px
      xxxxl: "2rem", // 32px
      xxxxxl: "3rem", // 48px
      xxxxxxl: "4rem", // 64px
  },
  typography: {
      Display: {
          fontSize: "2.5rem", // 40px
          fontWeight: "bold",
      },
      Heading: {
          fontSize: "1.5rem", // 24px
          fontWeight: "semibold",
      },
      Body: {
          fontSize: "1rem", // 16px
          fontWeight: "normal",
      },
      Caption: {
          fontSize: "0.75rem", // 12px
          fontWeight: "regular",
      }
  },
} as const;

export type ThemeType = typeof THEME;
