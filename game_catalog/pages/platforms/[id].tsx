import React from "react";
import { connectToDatabase } from "../../util/mongodb";
import { GetServerSideProps } from "next";

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

const GamesByPlatform: React.FC<GetPlatformsToProps> = ({ data, query }) => {
  return (
    <div className="container">
      <h2>Games By platforms</h2>
    </div>
  );
};

export default GamesByPlatform;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.id;
  const platforms = [];
  const { db } = await connectToDatabase();
  const findPlatform = await db
    .collection("games")
    .find({})
    .toArray()
    .then((data) => {
      data.forEach((games) => {
        const findGames = platforms.find((element) => {
          return element.slug === games.platform.slug;
        });
        if (!findGames) {
          platforms.push({
            name: games.platform.name,
            slug: games.platform.slug,
            logo: games.platform.platform_logo_url,
          });
        }
      });
      return platforms;
    });
  return {
    props: {
      data: findPlatform,
      query: query,
    },
  };
};
