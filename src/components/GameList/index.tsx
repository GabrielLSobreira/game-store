/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { GoCreditCard } from 'react-icons/go';
import { BsCashCoin, BsBag, BsCartPlus } from 'react-icons/bs';
import { useContext } from 'react';
import { Button, GameInfo } from './styles';
import { useRouter } from 'next/dist/client/router';
import CartContext from '../../contexts/CartContext';
import { Game } from '../../types/Game';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface GameProps {
  game: Game;
}

export const GameList = ({ game }: GameProps) => {
  const data = useContext(CartContext);
  const { handleAddCart, cart } = data;
  const router = useRouter();

  const handleClick = () => {
    handleAddCart!(game);
    if (cart.some((i) => i.slug === game.slug)) {
      return null;
    } else {
      toast.success('Jogo adicionado ao carrinho!');
    }
  };

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
      <Button onClick={handleClick}>
        <BsCartPlus />
        Carrinho
      </Button>
    </GameInfo>
  );
};
