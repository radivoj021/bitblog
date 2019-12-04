import React from 'react';
import { Link } from "react-router-dom";

const SingleAuthor = () => {
  return (
    <div className="container1" id="authors">
      <div id="allAuthors">
        <Link to="/authors">
          <h6> All authors</h6>
        </Link>
      </div>
      <div id="singleAuthor">
        <h1>Single Author</h1>
      </div>
    </div>
  )
}

export default SingleAuthor;