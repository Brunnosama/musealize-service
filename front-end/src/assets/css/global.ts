import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
    font-family: 'Montserrat', sans-serif;
 }

html, body, #root {
    height: 100%;
}

#root {
    display: flex;
    flex-direction: column;
}

#root > main {
    flex: 1;
}
a{
    color: #3D2283;
    text-decoration: none;
}
`