import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  background-color: #fcfcfc;
  padding: 1.3rem;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 100px;
  span {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const List = styled.ul`
  display: flex;

  li {
    margin: 0.1rem 0.5rem;
    svg {
      font-size: 1.5rem;
    }
  }
`;
