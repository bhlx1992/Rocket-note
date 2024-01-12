import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BLUE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    margin-top: 16px;
    height: 56px;
    border: 0;
    padding: 10 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled{ // quando o btn esta desabilitado
        opacity: 0.5;

    }
`;