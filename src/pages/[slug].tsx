/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import { RichText } from 'prismic-dom';
import { Game } from '../types/Game';
import { getPrismicClient } from '../services/prismic';
import {
  Container,
  GameInfo,
  GameInfoContainer,
  Plataforms,
  Price,
  Resume,
} from '../styles/gamedetails';
import { FaXbox, FaPlaystation } from 'react-icons/fa';
import { BsArrowLeftCircle } from 'react-icons/bs';
import Link from 'next/link';

interface gameProps {
  game: Game;
}

type Params = {
  params: {
    slug: string;
  };
};
const GameDetails = ({ game }: gameProps) => {
  return (
    <Container>
      <Link href="/">
        <a>
          <BsArrowLeftCircle /> Voltar
        </a>
      </Link>
      <h2>{game.title}</h2>
      <GameInfoContainer>
        <img src={game.image.url} alt={game.title} />
        <GameInfo>
          <strong>Sinopse: </strong>
          <p>{game.content}</p>
          <span>
            <strong>Data de Lançamento: </strong>
            {game.date}
          </span>
          <Plataforms>
            <strong>
              Plataformas:
              <FaXbox /> <FaPlaystation />
            </strong>
          </Plataforms>
          <Price>
            <strong>R${game.price.toFixed(2).replace('.', ',')}</strong>
            <span>
              3x de R${(game.price / 3).toFixed(2).replace('.', ',')} sem juros
            </span>
            <span>
              <strong>
                R$
                {(game.price - game.price * 0.05)
                  .toFixed(2)
                  .replace('.', ',')}{' '}
              </strong>
              á vista
            </span>
            <button>Comprar</button>
          </Price>
        </GameInfo>
      </GameInfoContainer>
    </Container>
  );
};

export const getServerSideProps = async ({ params }: Params) => {
  const { slug } = params;
  const prismic = getPrismicClient();
  const response = await prismic.getByUID('game', String(slug), {});
  const game = {
    slug: response.uid,
    title: RichText.asText(response.data.title),
    content:
      response.data.content.find((content: any) => content.type === 'paragraph')
        ?.text ?? '',
    date: new Date(response.data.date).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    image: response.data.image,
    price: response.data.price,
  };

  return {
    props: {
      game,
    },
  };
};

export default GameDetails;
