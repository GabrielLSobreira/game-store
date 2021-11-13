/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import { BsTrash } from 'react-icons/bs';
import CartContext from '../../contexts/CartContext';
import { Game } from '../../types/Game';
import { TableCollumn } from './styles';

interface TableItemProps {
  game: Game;
  index: number;
}

export const TableItem = ({ game, index }: TableItemProps) => {
  const data = useContext(CartContext);
  const { handleDeleteCart } = data;
  return (
    <tr key={game.slug}>
      <TableCollumn>
        <img src={game.image.url} alt={game.title} />
      </TableCollumn>
      <TableCollumn>{game.title}</TableCollumn>
      <TableCollumn>R${game.price.toFixed(2).replace('.', ',')}</TableCollumn>
      <TableCollumn>
        <BsTrash onClick={() => handleDeleteCart!(index)} />
      </TableCollumn>
    </tr>
  );
};
