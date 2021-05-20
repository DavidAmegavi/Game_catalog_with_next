import React from "react";
import { connectToDatabase } from "../../util/mongodb";
import { GetServerSideProps } from "next";
import Link from "next/link";

type GetPlatforms = {
  name: string;
  slug: string;
  logo: string;
  [key: string]: any;
};

type GetPlatformsToProps = {
  data: GetPlatforms[];
  query: string;
};

const GamesByPlatform: React.FC<GetPlatformsToProps> = ({ data }) => {
  return (
    <div className="container">
      <h1>Games List</h1>
      {data.map((game) => (
        <div className="row row-cols-2 ">
          <div className="col">
            <div className="card">
              <img src={game.cover} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title-center">{game.name}</h5>
                <h3 className="card-text-center">{game.price / 100}</h3>
                <Link href={`/games/${game.slug}`}>
                  <a className="btn btn-success">More details</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesByPlatform;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.id;
  const { db } = await connectToDatabase();
  const games = await db
    .collection("games")
    .find({ "platform.slug": query })
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

// export default function getGameByPlatform({ games }) {
//   // console.log(games);
//   return (
//     <div>
//       <h1>Jeux par Plateforms :</h1>
//       {games.map((game, idx) => {
//         return (
//           <div key={idx}>
//             <h2>{game.name}</h2>
//             <h2>{game.summary}</h2>
//             {/* <img src={game.platform_logo_url} /> */}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// export async function getServerSideProps(context) {
//   const query = context.query.id;
//   const { db } = await connectToDatabase();
//   const games = await db
//     .collection("games")
//     .find({ "platform.slug": query })
//     .toArray();
//   // console.log(games);
//   return {
//     props: {
//       games: JSON.parse(JSON.stringify(games)),
//     },
//   };
