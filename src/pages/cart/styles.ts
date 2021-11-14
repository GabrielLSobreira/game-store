import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 100px;
  h3 {
    font-size: 1.8rem;
    text-align: center;
    margin: 3rem 0;
  }

  @media (max-width: 720px) {
    margin: 0 0.5rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;

export const TableHeadColumm = styled.th`
  padding: 10px 0;
`;

export const TableCollumn = styled.td`
  padding: 15px 0;
  text-align: center;
  vertical-align: middle;

  img {
    width: 60px;
  }

  svg {
    cursor: pointer;
  }
`;

export const Purchase = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  p {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  strong {
    color: green;
  }

  button {
    width: 100%;
    padding: 0.8rem 0;
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
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  p {
    margin: 3rem 0;
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  button {
    padding: 0.5rem 1rem;
    border: none;
    color: #ffffff;
    background-color: red;
    border-radius: 5px;
    margin-top: 0.5rem;
    font-size: 1rem;

    &:hover {
      background-color: #dd1a1a;
    }
  }
  @media (max-width: 720px) {
    p {
      font-size: 1.3rem;
    }
  }
`;
