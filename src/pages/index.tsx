/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from 'next';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { GameList } from '../components/GameList';
import { Container, GamesContainer } from '../styles/home';
import { Game } from '../types/Game';

interface HomeProps {
  games: Game[];
}

const Home = ({ games }: HomeProps) => {
  return (
    <Container>
      <GamesContainer>
        {games.map((game: Game) => (
          <GameList game={game} key={game.slug} />
        ))}
      </GamesContainer>
    </Container>
  );
};

export async function getServerSideProps(context: GetServerSideProps) {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'game')],
    {
      orderings: '[document.last_publication_date desc]',
    }
  );

  const games = response.results.map((game) => {
    return {
      slug: game.uid,
      title: RichText.asText(game.data.title),
      image: game.data.image,
      price: game.data.price,
    };
  });

  return {
    props: {
      games,
    },
  };
}

export default Home;
