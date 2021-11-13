import styled from 'styled-components';

export const TableCollumn = styled.td`
  padding: 15px 1rem;
  text-align: center;
  vertical-align: middle;

  img {
    width: 60px;
  }

  svg {
    cursor: pointer;
    font-size: 1.5rem;
  }

  @media (max-width: 720px) {
    font-size: 0.8rem;
    img {
      width: 30px;
    }
    svg {
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
`;
