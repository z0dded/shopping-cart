import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
        width: 100%;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        width: 100%;
        height: 100%;
    }

    #root {
        height: 100%;
        width: 100%;
    }
`;
