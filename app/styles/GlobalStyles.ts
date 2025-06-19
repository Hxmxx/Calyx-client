import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-500: ${({theme}) => theme.colors.Primary.Normal};
        --text-primary: ${({ theme }) => theme.colors.Text.black[500]};
        --bg-light: ${({ theme }) => theme.colors.background.light};
    }

    body {
        font-family: 'Inter', sans-serif;
        color: var(--text-primary);
        background-color: var(--bg-light);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;