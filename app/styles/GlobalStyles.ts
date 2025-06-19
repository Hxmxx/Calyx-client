import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-500: ${({theme}) => theme.colors.primary[500]};
        --text-primary: ${({ theme }) => theme.colors.text.primary};
        --bg-light: ${({ theme }) => theme.colors.background.light};
    }

    body {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        color: var(--text-primary);
        background-color: var(--bg-light);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;