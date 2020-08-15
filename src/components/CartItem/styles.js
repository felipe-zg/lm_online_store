import styled from 'styled-components';

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--color-background-light);
  margin: 1rem;
  border-bottom: 1px solid var(--color-border-grey);
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 20vw;
  }

  @media (min-width: 700px){
    img {
      max-width: 150px;
      width: 100vw;
    }
  }
`;

export const ProductInfo = styled.div`
  margin: 1rem;
  width: 38vw;

  p {
    font-size: 1.6rem;
    color: var(--color-text-grey);
    margin: 0.5rem 0;
  }

  strong {
    font-size: 1.8rem;
  }

  strong span {
    font-size: 1.6rem;
    color: var(--color-text-grey);
  }

  @media (min-width: 700px){
    p {
      margin: 1.5rem 0 1rem 0;
    }
  }
`;

export const ProductActions = styled.div`
  margin: 1rem;
  width: 30vw;

  button {
    background: var(--color-button-background-danger);
    border: none;
    border-radius: 10px;
    padding: 0.2rem 1rem;
    width: 100%;
    justify-content: center;

    p {
      color: var(--color-text-light);
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.6rem;
    color: var(--color-text-grey);
    margin: 0.5rem 1rem 0 0;
  }

  @media (min-width: 700px){
    button {
      margin-top: 20px;
    }

    p {
      margin: 10px 5px 0 0;
    }
  }
`;

export const Amount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    background: var(--color-button-background);
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;

    p {
      color: var(--color-text-light);
      font-size: 1.5rem;
    }
  }

  strong {
    font-size: 1.6rem;
    color: var(--color-text-grey);
    margin: 0 1rem;
  }

  @media (min-width: 700px){
    button {
      padding: 5px 20px;
    }
  }
`;

export const Modal = styled.div`
  header {
    padding: 1rem 2rem 0 2rem ;

    h1 {
      font-size: 1.4rem;
      text-align: justify;
    }
  }
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0 1rem 0;

  p {
    color: var(--color-text-light);
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    width: 40%;
  }

  .remove-button {
    background: var(--color-button-background-danger);
  }

  .cancel-button {
    background: var(--color-button-background);
  }
`
