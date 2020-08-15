import styled from 'styled-components';

export const Header = styled.div`
  background: var(--color-primary);
  display: flex;
  justify-content: center;

  @media (min-width: 1100px) {
    width: 100vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-self: flex-start;
  width: 100vw;
  height: 10vh;
  padding: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-text-light);
  }

  @media (min-width: 700px){
    padding: 2rem 4rem;
  }

  @media (min-width: 1100px){
    max-width: 1100px;
    width: 100vw;

    h2 {
      opacity: 0;
    }
  }
`;
