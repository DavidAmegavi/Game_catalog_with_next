import React from "react";
import { GetServerSideProps } from "next";
import { connectToDatabase } from "../../util/mongodb";

type GetPlatforms = {
  name: string;
  slug: string;
  logo: string;
};

type GetPlatformsToProps = {
  data: GetPlatforms[];
};

const GetByPlatform: React.FC<GetPlatformsToProps> = ({ data }) => {
  return (
    <div className="container">
      <h1>Platforms List</h1>
      <ul className="pltm">
        {data.map((platforms) => {
          return (
            <li>
              <p>{platforms.name}</p>
              <img src={platforms.logo} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

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
        const firstStep = platforms.find((element) => {
          return element.slug === games.platform.slug;
        });
        if (!firstStep) {
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
