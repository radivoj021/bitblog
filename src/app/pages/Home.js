import React from "react";
import { FetchPosts } from "../../services/PostService";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: []
    };
  }

  componentDidMount() {
    FetchPosts().then(posts => this.setState({ allPosts: posts }));
  }

  render() {
    const mapPost = this.state.allPosts.map(posts => {
      return (
        <>
          <div>
            <Link>
              <h3>{posts.title}</h3>
            </Link>
            <hr />
          </div>
        </>
      );
    });
    return (
      <>
        <div className="container1">
          <h1 className="center">Blog</h1>
          <h3>{mapPost}</h3>
        </div>
      </>
    );
  }
}

export default Posts;
