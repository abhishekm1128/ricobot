import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap');

    body {
        margin: 0;
        font-family: 'Raleway';
        color: #fff
    }

    /* Responsive typography */
    h1 {
        font-size: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        h1 {
            font-size: 1.5rem;
        }
    }
`;

export default GlobalStyles;
