import styled from "styled-components";
import bgImg from "../../assets/IMG_5217.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    text-align: center;

    box-shadow: 80px 0 120px 150px ${({theme}) => theme.COLORS.BACKGROUND_800};
    position: relative;

    > h1{
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.BLUE};   
    }
    > h2{
        font-size: 24px;
        margin: 48px 0;
    }
    > p{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100}; 
    }
    a{
        margin-top: 124px;
        color: ${({theme}) => theme.COLORS.BLUE}; 
    }

`;

export const BgImg = styled.div`
    flex: 1;
    background: url(${bgImg})no-repeat center;
    background-size: cover;
`;

