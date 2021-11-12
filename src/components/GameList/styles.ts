import styled from 'styled-components';

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  padding: 1.1rem;
  border: 1px solid #9d9d9d;
  transition: all 0.2s;
  img {
    border-radius: 5px;
    width: 100%;
  }

  a {
    padding-bottom: 0.8rem;
    font-size: 1rem;
    text-align: left;

    span {
      margin-top: 0.8rem;
    }
  }

  strong {
    padding-bottom: 0.8rem;
    font-size: 1.3rem;
  }

  span {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.3rem;
    }
  }

  span + span {
    padding-bottom: 1rem;
    margin-top: 0.3rem;
  }

  &:hover {
    border: 1px solid black;
    box-shadow: 0px 0px 1px black;
  }

  @media (max-width: 1200px) {
    width: 165px;
  }

  @media (max-width: 720px) {
    width: 160px;
  }

  @media (max-width: 320px) {
    width: 140px;
  }
`;

export const Button = styled.button`
  width: 70%;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  border: 1px solid black;
  border-radius: 3px;
  background-color: white;
  transition: all 0.3s;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  svg {
    margin: 0 0.3rem;
  }
  & + button {
    margin-top: 0.8em;
  }
  &:hover {
    border: 1px solid #61ce70;
    box-shadow: 0px 0px 2px black;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;
