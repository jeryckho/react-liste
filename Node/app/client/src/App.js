import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { BrowserRouter, Route, Link } from "react-router-dom"; // eslint-disable-line no-unused-vars
import Liste from "./Liste";

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Liste} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

export default App;
