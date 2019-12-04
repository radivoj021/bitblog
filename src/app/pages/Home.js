import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div className="container1">
        <h1 className="center">POSTS</h1>
        <Link to="/post/1">
          <h3>Title 1</h3>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          temporibus error odit nesciunt animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facere temporibus error odit nesciunt
          animi.
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Home;
