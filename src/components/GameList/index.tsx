/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { GoCreditCard } from 'react-icons/go';
import { BsCashCoin, BsBag, BsCartPlus } from 'react-icons/bs';
import { useContext } from 'react';
import { Button, GameInfo } from './styles';

export const GameList = ({ game }: any) => {
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
      <Button>
        <BsBag />
        Comprar
      </Button>
      <Button>
        <BsCartPlus />
        Carrinho
      </Button>
    </GameInfo>
  );
};
