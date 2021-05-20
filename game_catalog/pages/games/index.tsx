import { GetServerSideProps } from "next";
import { connectToDatabase } from "../../util/mongodb";
import Link from "next/link";

type GetGames = {
  name: string;
  price: number;
  cover: string;
  slug: string;
};

type GetGamesToProps = {
  data: GetGames[];
};

const Games: React.FC<GetGamesToProps> = ({ data }) => {
  return (
    <div className="container">
      <h1>Games List</h1>
      <ul>
        {data.map((game) => (
          <Link href={`/games/${game.slug}`}>
            <li>
              <h2>{game.name}</h2>
              <h3>{game.price / 100}</h3>
              <img src={game.cover} alt="" />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Games;

const getServerSideProps: GetServerSideProps = async () => {
  const { db } = await connectToDatabase();
  const games = await db
    .collection("games")
    .find({})
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
