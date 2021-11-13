import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const GamesContainer = styled.div`
  display: grid;
  margin: 3rem 0;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
