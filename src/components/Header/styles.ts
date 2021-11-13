import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid black;
  background-color: #fcfcfc;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 1.5rem;
  align-items: center;

  @media (max-width: 720px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.a`
  font-size: 2.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: 'Kaushan Script', cursive;
  span {
    color: red;
    margin-left: 0.5rem;
  }
  svg {
    margin-left: 0.8rem;
  }

  @media (max-width: 720px) {
    font-size: 1.9rem;
    svg {
      margin-left: 0.5rem;
      color: yellow;
    }
    span {
      margin-left: 0.3rem;
    }
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.a`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  font-size: 1.2rem;
  transition: all 0.2s;

  &:hover {
    font-weight: bold;
  }

  &.active {
    color: red;
  }

  svg {
    font-size: 1.3rem;
    margin-right: 0.4rem;
  }

  @media (max-width: 720px) {
    font-size: 1rem;
    margin: 0 0.5rem;
    svg {
      margin-left: 0.3rem;
      font-size: 1.5rem;
    }
    span {
      display: none;
    }
  }
`;
