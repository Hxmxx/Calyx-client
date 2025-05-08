export const theme = {
    colors: {
        Primary: {
            Light : "#FFE6F1",
            Light_hover: "#FFD9EA",
            Light_active: "#FFB0D5",
            Normal: "#FF0076",
            Normal_hover: "#E6006A",
            Normal_active: "#CC005E",
            Dark: "#BF0059",
            Dark_hover: "#990047",
            Dark_active: "#730035",
            Darker: "#590029",
        },
        Secondary: {
            Light: "#E7F1FF",
            Light_hover: "#DBE9FF",
            Light_active: "#B4D2FF",
            Normal: "#0D6EFF",
            Normal_hover: "#0C63E6",
            Normal_active: "#0A58CC",
            Dark: "#0A53BF",
            Dark_hover: "#084299",
            Dark_active: "#063173",
            Darker: "#052759",
        },
        Semantic: {
            Info: "3B82F6" ,
            Success: "22C55E" ,
            Warning: "" ,
            Error: ,
        },
        Text: {
            black: {
                50: "#C5CCDB",
                100: "#9FA6B5",
                200: "#79808F",
                300: "#545B6A",
                400: "#2E3544",
                500: "#080F1E",
                600: "#000000",
                700: "#000000",
                800: "#000000",
                900: "#000000",

                opacity: {
                    20: "0.20",
                    40: "0.40",
                    60: "0.60",
                    80: "0.80",
                    100: "1.00",
                }
            },
            white: {
                50: "#FFFFFF",
                100: "#FFFFFF",
                200: "#FFFFFF",
                300: "#FFFFFF",
                400: "#FFFFFF",
                500: "#F6F6F6",
                600: "#D0D0D0",
                700: "#ABABAB",
                800: "#858585",
                900: "#5F5F5F",
            }
        },
        background: {
            light: "#f9f9f9",
            dark: "#151515",
        },
        spacing: {
            xs: "0.5rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "2rem",
            xl: "3rem",
            xxl: "4rem",
        },
        typography: {
            titleLg: {
                fontSize: "3rem",
                fontWeight: "SemiBold",
                lineHeight: "120%",                
            },
            titleMd: {
                fontSize: "2.25rem",
                fontWeight: "SemiBold",
                lineHeight: "120%",                
            },
            titleSm: {
                fontSize: "1.5rem",
                fontWeight: "SemiBold",
                lineHeight: "130%",                
            },
            textLg: {
                fontSize: "1.125rem",
                fontWeight: "Regular",
                lineHeight: "140%",                
            },
            textMd: {
                fontSize: "1rem",
                fontWeight: "Regular",
                lineHeight: "140%",                
            },
            textSm: {
                fontSize: "0.875rem",
                fontWeight: "Regular",
                lineHeight: "140%",                
            },
            caption: {
                fontSize: "0.75rem",
                fontWeight: "Regular",
                lineHeight: "140%",                
            },
        },
    },
};

export type ThemeType = typeof theme;