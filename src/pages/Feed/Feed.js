import { styled } from "styled-components";

export const FeedMain = styled.main`
  ul{
    overflow-y: auto;
    display: flex;
    gap: 2rem;
    padding: 2rem;
  }



  @media (min-width: 1000px){
    display: flex;
    width: 100vw;
    min-height: calc(100vh - 9.5rem);

    ul{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }

}

`