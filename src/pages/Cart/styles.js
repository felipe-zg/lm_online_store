import styled from 'styled-components';
import MaskedInput from 'react-input-mask'

export const HomeLink = styled.div`
  width: 10vw;

  strong {
    color: white;
    font-size: 1.4rem;
    margin-left: 1rem;
  }

  @media (min-width: 500px){
    width: 40px;

    strong {
      margin-left: 0.7rem;
    }
  }

  @media (min-width: 700px){
    width: 50px;
  }

  @media (min-width: 1100px){
    width: 60px;

    strong {
      opacity: 0;
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  img {
    width: 40vw;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  @media (min-width: 700px){
    img {
      width: 20vw;
    }
  }

  @media (min-width: 1100px){
    img {
      width: 150px;
    }
  }
`;

export const Cart = styled.div`
  @media (min-width: 700px){
    main {
      display: flex;
      justify-content: center;
    }
  }
`;

export const CartItems = styled.div`
  @media (min-width: 700px){
    display: grid;
    grid-template-columns: auto;
    max-width: 700px;
    width: 100vw;
  }
`;

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-background-light);
  margin: 1rem;
  border-bottom: 1px solid var(--color-border-grey);
  border-radius: 10px;
  overflow: hidden;
  padding: 1rem;

  div {
    width: 80vw;
    align-self: center;
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.6rem;
  }

  @media (min-width: 700px){
    max-width: 680px;
    width: 100%;

    div {
      max-width: 600px;
    }

    .checkout-button {
      max-width: 600px;
    }
  }
`;

export const FreightInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ZipcodeInput = styled(MaskedInput)`
  padding: 1rem;
  border-radius: 5px;
  border: none;
  border-bottom: 1px solid var(--color-primary);
  background: #ddb;
  width: 50vw;

  :focus-within::after{
    border: 1px solid var(--color-primary)
  }
`

export const CalculateFreightButton = styled.button`
  background: var(--color-button-background);
  padding: 1.2rem 2rem;
  margin-left: 1.5rem;
  border: none;
  border-radius: 5px;
  color: var(--color-text-light);
`;

export const CheckoutButton = styled.button`
  background: var(--color-button-background);
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  width: 80vw;
  margin: 3rem 0 1rem 0;
  color: var(--color-text-light);
`;
