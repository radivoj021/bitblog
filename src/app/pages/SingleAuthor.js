import React from "react";
import { AuthorAddress } from "../components/AuthorAddress";

const dummyAuthor = {
  street: "sdlkfj",
  city: "lsdkfj",
  zipcode: "kajas",
  latitude: 44.787197,
  longitude: 20.457273
};

const props = {
  author: dummyAuthor
};

const Home = () => {
  return (
    <div className="container1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dicta
        enim atque ad ipsum aspernatur consectetur neque, aperiam maiores, hic
        vitae debitis eos incidunt beatae voluptas perferendis libero optio
        corporis.
      </p>

      <AuthorAddress author={dummyAuthor} />
    </div>
  );
};

export default Home;
