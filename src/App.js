import React from "react";
import Header from "./app/partials/Header";
import Footer from "./app/partials/Footer";
import About from "./app/pages/About";
import { Switch, Route } from "react-router-dom";
import Home from "./app/pages/Home";
import SinglePostPage from "./app/pages/SinglePostTitle";
import AuthorAddress from "./app/components/AuthorAddress";
import SingleAuthor from "./app/pages/SingleAuthor";
import Authors from "./app/pages/Authors";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/post/:id" component={SinglePostPage} />
        <Route exact path="/AuthorAddress" component={AuthorAddress} />
        <Route exact path="/SingleAuthor" component={SingleAuthor} />
        <Route exact path="/authors" component={Authors} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
