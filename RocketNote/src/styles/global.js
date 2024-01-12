import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800 };
        color: ${({theme}) => theme.COLORS.WHITE};

        
    }

    body, button, a, textarea{
        -webkit-font-smoothing: antialiased;

        font-family: 'Chakra Petch', sans-serif;
        font-size: 17px;
        outline: none;
        
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }
`;