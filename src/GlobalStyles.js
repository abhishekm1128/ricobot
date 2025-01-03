import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap');

    :root {
        --mobile-width: ${({ theme }) => theme.breakpoints.mobile};
        --tablet-width: ${({ theme }) => theme.breakpoints.tablet};
        --desktop-width: ${({ theme }) => theme.breakpoints.desktop};
    }

    body {
        margin: 0;
        font-family: 'Raleway';
        color: #fff
    }
    
    div {
        margin: 12px 0px;
    }

    .product-content {
        padding: 0px 20px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        .product-header {
            font-size: 31px;
            font-weight: 900
        }
        .product-title {
            font-size: 35px;
            font-weight: 900
        }
        .product-description {
            font-size: 16px;
            font-weight: 500
        }
        .chip-text {
            font-size: 14px;
            font-weight: 800
        }
        .cta-button {
            font-size: 16px;
            font-weight: 900
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        .product-header {
            font-size: 17px;
            font-weight: 900
        }
        .product-title {
            font-size: 49px;
            font-weight: 900
        }
        .product-description {
            font-size: 14px;
            font-weight: 500
        }
        .chip-text {
            font-size: 12px;
            font-weight: 800
        }
        .cta-button {
            font-size: 14px;
            font-weight: 900
        }
    }
`;

export default GlobalStyles;
