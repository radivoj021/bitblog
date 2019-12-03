import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3 className="center">POSTS</h3>
      <div className="container1">
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

        <Link to="/post/2">
          <h3>Title 2</h3>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          temporibus error odit nesciunt animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facere temporibus error odit nesciunt
          animi.
        </p>
        <hr />

        <Link to="/post/3">
          <h3>Title 3</h3>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          temporibus error odit nesciunt animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facere temporibus error odit nesciunt
          animi.
        </p>
        <hr />

        <Link>
          <h3>Title 4</h3>
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
