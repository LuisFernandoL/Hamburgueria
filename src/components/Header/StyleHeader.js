import { styled } from "styled-components";

export const StyleHeader = styled.header`
    display: flex;
    flex-direction: row;
    background-color: #F5F5F5;
    height: 9.5rem;

    .DivHeader{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        span{
            min-width: clamp(150px, 100%, 800px);
            justify-content: space-between;
            display: flex;
        }

        h1{
            background-image: var(--gradiente);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 700;
        }

        button{
            padding: 0 1rem;
        }
        svg{
            fill: #BDBDBD;
            height: 2.5rem;
            width: 4rem;
        }

        .divInput{
            min-width: clamp(150px, 100%, 360px)
        }
        input{
            height: 6rem;
            background-color: #FFFFFF;
            border-radius: 0.8rem;
            width: 90%;

        }
    }



`