import React from "react";

import Header from "./app/partials/Header";
import Footer from "./app/partials/Footer";
import About from "./app/pages/About";
import { Switch, Route } from "react-router-dom";
import Home from "./app/pages/Home";
import SinglePostPage from "./app/pages/SinglePostTitle";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/post/:id" component={SinglePostPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
