import styled from 'styled-components';

export const Product = styled.div`
  width: 45vw;
  height: 40vh;
  padding: 2rem;
  margin: 0 auto 1rem auto;
  border-radius: 10px;
  border-bottom: 1px solid var(--color-border-grey);
  background: var(--color-background-light);

  h2 {
    color: var(--color-text-grey);
    font-size: 1.6rem;
    margin-top: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  @media (min-width: 600px){
    width: 30vw;
    height: 35vh;
  }

  @media (min-width: 1100px){
    width: 250px;
    height: 380px;
  }
`;

export const Productimage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const Image = styled.img`
  max-width: 35vw;

  @media (min-width: 600px){
    width: 25vw;
  }

  @media (min-width: 1100px){
    width: 200px;
    align-self: center;
  }
`

export const Button = styled.button`
  background: var(--color-button-background);
  margin: 2rem 0;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;

  p {
    color: var(--color-text-light);
    font-size: 1.2rem;
  }

  @media (min-width: 600px){
    margin: 1.5rem 0;
  }

  @media (min-width: 1100px){
    margin: 2rem 0;
    padding: 0.7rem 2rem;
  }
`

export const PriceInfo = styled.div`
  p {
    font-size: 1.2rem;
    color: var(--color-text-grey);
  }
`

export const Price = styled.strong`
  font-size: 2rem;

  span {
    font-size: 1.4rem;
  }
`
