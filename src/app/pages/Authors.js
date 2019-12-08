import React from "react";
import { Link } from "react-router-dom";
import { FetchAuthors } from "../../services/AuthorService";

class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAuthor: []
    };
  }

  componentDidMount() {
    FetchAuthors().then(authors => this.setState({ allAuthor: authors }));
  }

  render() {
    /*    var aaa = this.state.allAuthor;
           var bbb = [];
   
           for (var i = 0; i < aaa.length; i++) {
               bbb.push(aaa[i].name);
           } */
    /* 
                console.log(aaa);
                console.log(bbb); */
    const mapAuthor = this.state.allAuthor.map(author => {
      return (
        <>
          <p></p>
          <Link to="/SingleAuthor">
            <h4>{author.name}</h4>
          </Link>
          <hr />
        </>
      );
    });

    if (this.state.allAuthor.length === 0) {
      return (
        <div class="container1">
          <h3 className="center">Loading...</h3>
        </div>
      );
    }

    return (
      <>
        <div className="container1">
          <h1 class="center">AUTHORS({mapAuthor.length})</h1>
          {mapAuthor}
        </div>
      </>
    );
  }
}

export default Authors;
