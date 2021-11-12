/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { GoCreditCard } from 'react-icons/go';
import { BsCashCoin, BsBag } from 'react-icons/bs';
import { useContext } from 'react';
import { Button, GameInfo } from './styles';
import { useRouter } from 'next/dist/client/router';
import CartContext from '../../contexts/CartContext';
import { Game } from '../../types/Game';

interface GameProps {
  game: Game;
}

export const GameList = ({ game }: GameProps) => {
  const data = useContext(CartContext);
  const { handleAddCart } = data;
  const router = useRouter();
  return (
    <GameInfo key={game.slug}>
      <Link href={`/${game.slug}`}>
        <a>
          <img src={game.image.url} alt={game.title} />
          <span>{game.title}</span>
        </a>
      </Link>
      <strong>R$ {game.price.toFixed(2).replace('.', ',')}</strong>
      <span>
        <GoCreditCard />
        3x sem juros
      </span>
      <span>
        <BsCashCoin />
        5% á vista
      </span>
      <Button onClick={() => router.push(`/${game.slug}`)}>
        <BsBag />
        Comprar
      </Button>
    </GameInfo>
  );
};
