import React from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { connectToDatabase } from "../../util/mongodb";

type GetGame = {
  name: string;
  price: number;
  cover: string;
  slug: string;
  summary: string;
};

type GetGamesToProps = {
  data: GetGame[];
};

const Games: React.FC<GetGamesToProps> = ({ data }) => {
  return (
    <div className="container">
      <h1>Game</h1>
      <ul>
        {data.map((game) => (
          <Link href={`/games/${game.slug}`}>
            <li>
              <h2>{game.name}</h2>
              <h3>{game.price / 100}</h3>
              <img src={game.cover} alt="" />
              <p>{game.summary}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Games;

const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.id;
  const { db } = await connectToDatabase();
  const games = await db
    .collection("games")
    .find({ slug: query })
    .toArray()
    .then((gamesList) => {
      return gamesList.map((games) => {
        if (games.cover === undefined) {
          return {
            name: games.name,
            price: games.price,
            // cover: games.cover,
          };
        } else {
          return {
            name: games.name,
            price: games.price,
            cover: games.cover.url,
            slug: games.slug,
            summary: games.summary,
          };
        }
      });
    });

  return {
    props: {
      data: games,
    },
  };
};

export { getServerSideProps };
