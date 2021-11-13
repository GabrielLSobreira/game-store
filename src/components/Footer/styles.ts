import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid black;
  background-color: #fcfcfc;
  padding: 1.5rem;

  span {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }
`;

export const List = styled.ul`
  display: flex;

  li {
    margin: 0.5rem 0.5rem;
    svg {
      font-size: 1.5rem;
    }
  }
`;
