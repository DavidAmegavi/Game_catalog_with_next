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

const GetAllPlatforms: React.FC<GetPlatformsToProps> = ({ data }) => {
  return (
    <div className="container">
      <h1>Platforms List</h1>
      {data.map((platform) => (
        <div className="row row-cols-2 ">
          <div className="col">
            <div className="card">
              <img src={platform.logo} className="card-img-top" />
              <div className="card-text-center">
                <Link href={`/platforms/${platform.slug}`}>
                  <a className="btn btn-dark">{platform.name}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAllPlatforms;

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
