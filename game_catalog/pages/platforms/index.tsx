import React from "react";
import { GetServerSideProps } from "next";
import { connectToDatabase } from "../../util/mongodb";
import Link from "next/link";

type GetPlatforms = {
  name: string;
  slug: string;
  logo: string;
  [key: string]: any;
};

type GetPlatformsToProps = {
  data: GetPlatforms[];
};
const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.id;
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

{
  /* <div className="container">
  <div className="row justify-content-md-center" >
      <div className="col-xl-auto">
        <div className="col-xl-auto" width="16.5rem" height= "27rem">
          <a href="/platforms/{{ platform.slug }}">
            <img src="{{platform.cover}}">
          </a>
          <h6 className="text-center">{{ platform.name }}</h6>
        </div>
      </div>
  </div>
</div>   */
}

export default GetByPlatform;

export const getServerSideProps: GetServerSideProps = async () => {
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
    },
  };
};
