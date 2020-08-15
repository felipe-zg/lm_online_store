import styled from 'styled-components';

export const Home = styled.div`
  @media (min-width: 1100px){
    main {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HomeTitle = styled.div`
  opacity: 0;

  @media (min-width: 1100px){
    display: flex;
    justify-content: center;
    opacity: 1;

    div {
      max-width: 1100px;
      width: 100vw;
      padding: 20px;

      h1 {
        font-size: 4rem;
      }
    }
  }
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 2rem 1rem 0 1rem;

  @media (min-width: 600px){
    grid-template-columns: auto auto auto;
  }

  @media (min-width: 1100px){
    grid-template-columns: auto auto auto auto;
    max-width: 1100px;
    width: 100vw;
  }
`;
