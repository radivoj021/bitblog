import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="header">
      <div id="bitBlog">
        <Link to="/">BIT BLOG</Link>
      </div>
      <div id="nav">
        <div>
          <Link to="/">Home</Link>
        </div>
        <span> | </span>
        <div>
          <Link to="/authors">Authors</Link>
        </div>
        <span> | </span>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
