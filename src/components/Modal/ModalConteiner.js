import styled from "styled-components"

export const ModalConteiner = styled.div`
    position: fixed;

    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.3);
    flex-direction: column;
    

    section{
        position: relative;
        min-width: clamp(150px, 100%, 360px);
        margin: 2rem;
        background-color: #fff;
        height: 35vh;
       
    header {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: 10%;
        background-color: #27AE60;
        padding: 0 2rem;
        color: #FFFFFF;
        font-size: 1.8rem;
        font-weight: 700;
       
    }
    
    }

    .nameItemList{
        display: flex;
        padding: 0 1rem;
        font-size: 1.8rem;
        font-weight: 700;
    }

    ul{
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 0 2rem;
        height: 70%;
        overflow-x: auto;
    }
 

    button{
        color: #FFFFFF;
    }
`