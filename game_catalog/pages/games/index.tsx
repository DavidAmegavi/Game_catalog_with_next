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

{
  /* <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */
}

const Games: React.FC<GetGamesToProps> = ({ data }) => {
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
