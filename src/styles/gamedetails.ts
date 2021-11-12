import styled from 'styled-components';

export const GameInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 900px;

  img {
    width: 400px;
    border-radius: 5px;
    box-shadow: 0 0 5px black;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 150px;
      margin-bottom: 2rem;
    }
  }
`;

export const GameInfo = styled.div`
  strong {
    font-size: 1.3rem;
  }
  p {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  span {
    display: block;
    font-size: 1.3rem;
  }
`;

export const Plataforms = styled.div`
  margin-top: 1.5rem;

  svg:first-child {
    margin-left: 0.5rem;
  }

  svg + svg {
    margin-left: 0.3rem;
  }
`;

export const Resume = styled.div`
  display: flex;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 1rem;
    margin-bottom: 0.2rem;

    strong {
      font-size: 1rem;
    }
  }

  button {
    width: 80%;
    padding: 1rem 0;
    font-size: 1.5rem;
    margin: 0.5rem 0;
    border: none;
    background-color: #61ce70;
    border-radius: 5px;
    color: #fff;
    transition: all 0.4s;

    &:hover {
      background-color: #28ef42;
    }

    @media (max-width: 1024px) {
      max-width: 50%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
  h2 {
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }

  a {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    svg {
      margin-right: 0.3rem;
    }
  }
`;
