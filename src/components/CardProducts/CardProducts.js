import { styled } from "styled-components";

export const StyleCardProducts = styled.li`
display: flex;
flex-direction: column;
border: 0.2rem solid var(--color-grey-100);
border-radius: 0.5rem;
min-width: clamp(150px, 100%, 300px);
min-height: clamp(150px, 100%, 360px);
transition: transform 0.5s;



&:hover{
    transform: scale(1.05);
    border: 0.2rem solid #27AE60 ;
    button{
        background-color: #27AE60;
    }
}

    .divImg{
        display: flex;
        width: 18rem;
        height: 18rem;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: #F5F5F5;
    }

    img{
        width: 70%;
        height: 100%;
    }
    h2{
        font-size: 1.8rem;
        font-weight: 700;
        padding: 2rem;
    }

    span{
        font-size: 1.2rem;
        color: var(--color-grey-300);
        padding: 2rem;
    }

    p{
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--color-color-primary);
        padding: 0 2rem ;
    }

    button{
        display: flex;
        padding: 1rem;
        border: none;
        width: 40%;
        margin: 1rem 2rem;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        background-color: #BDBDBD;
        color: #FFFFFF;
        border-radius: 0.8rem;
    }
`