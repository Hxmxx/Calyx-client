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
          Light : "#F2EFFF",
          Light_hover: "#EBE7FE",
          Light_active: "#D6CCFD",
          Normal: "#7A5CFA",
          Normal_hover: "#6E53E1",
          Normal_active: "#624AC8",
          Dark: "#5C45BC",
          Dark_hover: "#493796",
          Dark_active: "#372970",
          Darker: "#2B2058",
      },
      Secondary: {
          Light: "#FFFBFC",
          Light_hover: "#FFF9FA",
          Light_active: "#FFF3F5",
          Normal: "#FFD7E0",
          Normal_hover: "#E6C2CA",
          Normal_active: "#CCACB3",
          Dark: "#BFA1A8",
          Dark_hover: "#998186",
          Dark_active: "#736165",
          Darker: "#594B4E",
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
