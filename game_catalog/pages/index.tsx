import React from "react";
import { connectToDatabase } from "../util/mongodb";

export default function Home() {
  return (
    <div className="container">
      <h3 className="text-center text-uppercase ">
        Hey Fanzi , bienvenue à toi !
      </h3>
      <div className="row">
        <div className="col-12 text-center">
          <img
            src="/pagedaccueil.png"
            className="rounded"
            width="90%"
            height="auto"
          />
          <p className="text-center">Thanks you !</p>
        </div>
      </div>
    </div>
  );
}
