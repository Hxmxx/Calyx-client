export const theme = {
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
            Info: "3B82F6" ,
            Success: "22C55E" ,
            Warning: "" ,
            Error: "",
        },
        Text: {
            dark: {
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
                pcSize: "48px",
                mobileSize : "30px",
                fontWeight: "SemiBold",
                lineHeight: "120%",                
            },
            titleMd: {
                pcSize: "32px",
                mobileSize : "26px",
                fontWeight: "SemiBold",
                lineHeight: "120%",                  
            },
            titleSm: {
                pcSize: "24px",
                mobileSize : "20px",
                fontWeight: "SemiBold",
                lineHeight: "130%",                  
            },
            textLg: {
                pcSize: "18px",
                mobileSize : "18px",
                fontWeight: "SemiBold",
                lineHeight: "140%",                   
            },
            textMd: {
                pcSize: "16px",
                mobileSize : "18px",
                fontWeight: "Regular",
                lineHeight: "140%",             
            },
            textSm: {
                pcSize: "48px",
                mobileSize : "16px",
                fontWeight: "Regular",
                lineHeight: "140%",                 
            },
            caption: {
                pcSize: "48px",
                mobileSize : "14px",
                fontWeight: "Regular",
                lineHeight: "140%",                 
            },
        },
    },
};

export type ThemeType = typeof theme;