import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    svg {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: inherit !important;
        color: inherit !important;
    }
`

export default GlobalStyle