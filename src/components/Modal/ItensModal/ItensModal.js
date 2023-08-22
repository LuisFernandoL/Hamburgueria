import { styled } from "styled-components";

export const ItensModalCss = styled.li`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;


    .CartBody{
        height: 100%;
        display: flex;
        width: 70%;

    }
    img{
        height: 8.2rem;
        width: 8rem;
        background-color: var(--color-grey-100) ;
        border-radius: 0.5rem;
    }

    p{
        color: black;
    }
`