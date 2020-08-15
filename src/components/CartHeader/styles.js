import styled from 'styled-components';

export const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h4 {
    opacity: 0;
  }

  @media (min-width: 1100px){
    h4 {
      opacity: 1;
      margin-right: 10px;
      color: var(--color-text-light);
      font-size: 1.6rem;
    }
  }
`;

export const CartLink = styled.div`
  width: 6vw;

  strong {
    color: white;
    font-size: 1.4rem;
    margin-left: 1rem;
  }

  @media (min-width: 500px){
    width: 20px;

    strong {
      margin-left: 0.7rem;
    }
  }

  @media (min-width: 700px){
    width: 30px;
  }

  @media (min-width: 1100px){
    width: 40px;

    strong {
      opacity: 0;
    }
  }
`;
