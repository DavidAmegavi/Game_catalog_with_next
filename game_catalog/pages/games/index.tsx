import { GetServerSideProps } from "next";
import { connectToDatabase } from "../../util/mongodb";

type GetGames = {
  name: string;
  price: number;
  cover: string;
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
          <li>
            <h2>{game.name}</h2>
            <h3>{game.price / 100}</h3>
            <img src={game.cover} alt="" />
          </li>
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

// export default function Games({ games }) {
//   return (
//     <div>
//       <h1>Games List</h1>
//       <ul>
//         {games.map((game) => (
//           <li>
//             <h2>{game.name}</h2>
//             <h3>{game.summary}</h3>
//             <p>{game.url}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export async function getServerSideProps() {
//   const { db } = await connectToDatabase();
//   const games = await db.collection("games").find({}).toArray();
//   return {
//     props: {
//       games: JSON.parse(JSON.stringify(games)),
//     },
//   };
// }
