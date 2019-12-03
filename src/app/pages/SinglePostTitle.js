import React from "react";
import { Link } from "react-router-dom";

const SinglePostPage = props => {
  return (
    <div className="container1">
      <h2 class="center">SINGLE POST TITLE {props.match.params.id}</h2>
      <Link to="../components/AuthorInfo">
        <h3 class="center">Author name</h3>
      </Link>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
        blanditiis obcaecati fugiat nisi ducimus beatae, similique repellendus
        maiores voluptatum, tenetur harum aspernatur suscipit non, quam totam
        expedita dolorum eligendi asperiores. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Atque blanditiis obcaecati fugiat nisi
        ducimus beatae, similique repellendus maiores voluptatum, tenetur harum
        aspernatur suscipit non, quam totam expedita dolorum eligendi
        asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Atque blanditiis obcaecati fugiat nisi ducimus beatae, similique
        repellendus maiores voluptatum, tenetur harum aspernatur suscipit non,
        quam totam expedita dolorum eligendi asperiores. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Atque blanditiis obcaecati fugiat
        nisi ducimus beatae, similique repellendus maiores voluptatum, tenetur
        harum aspernatur suscipit non, quam totam expedita dolorum eligendi
        asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Atque blanditiis obcaecati fugiat nisi ducimus beatae, similique
        repellendus maiores voluptatum, tenetur harum aspernatur suscipit non,
        quam totam expedita dolorum eligendi asperiores. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Atque blanditiis obcaecati fugiat
        nisi ducimus beatae, similique repellendus maiores voluptatum, tenetur
        harum aspernatur suscipit non, quam totam expedita dolorum eligendi
        asperiores.
      </p>

      <br />
      <br />
      <br />
      <hr />
      <h3>3 more posts from same author</h3>
      <br />
      <Link>
        <h3>Title 10 - velit ...</h3>
      </Link>
      <Link>
        <h3>Title 11 - velit ...</h3>
      </Link>
      <Link>
        <h3>Title 12 - velit ...</h3>
      </Link>
    </div>
  );
};

export default SinglePostPage;
