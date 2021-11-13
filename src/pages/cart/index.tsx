import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { Game } from '../../types/Game';
import {
  Container,
  EmptyCart,
  Purchase,
  Table,
  TableCollumn,
  TableHeadColumm,
} from './styles';
import Link from 'next/link';
import { TableItem } from '../../components/TableItem';
import { useRouter } from 'next/dist/client/router';

const Cart = () => {
  const data = useContext(CartContext);
  const { cart, cartValue } = data;
  const router = useRouter();

  return (
    <Container>
      {!cart.length ? (
        <EmptyCart>
          <p>Não existem produtos no carrinho</p>
          <button onClick={() => router.push('/')}>Ir as compras</button>
        </EmptyCart>
      ) : (
        <>
          <h3>Carrinho de Compras</h3>
          <Table>
            <thead>
              <TableHeadColumm>Imagem</TableHeadColumm>
              <TableHeadColumm>Produto</TableHeadColumm>
              <TableHeadColumm>Valor</TableHeadColumm>
              <TableHeadColumm>Remover</TableHeadColumm>
            </thead>
            <tbody>
              {cart.map((game: Game, index: number) => (
                <TableItem key={game.slug} game={game} index={index} />
              ))}
            </tbody>
          </Table>
          <Purchase>
            <p>Total no carrinho</p>
            <span>
              Total: <strong>R${cartValue.toFixed(2).replace('.', ',')}</strong>
            </span>
            <button>Concluir compra</button>
          </Purchase>
        </>
      )}
    </Container>
  );
};

export default Cart;
