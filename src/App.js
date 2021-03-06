import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./contrainers/Home";
import Travels from "./contrainers/Travels";
import Hotels from "./contrainers/Hotels";
import Restaurants from "./contrainers/Restaurants";
import About from "./contrainers/About";
import ScrollToTop from "./config/ScrollToTop";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop>
            <Route path="/" exact component={Home} />
            <Route path="/travels" exact component={Travels} />
            <Route path="/hotels" exact component={Hotels} />
            <Route path="/restaurants" exact component={Restaurants} />
            <Route path="/about" exact component={About} />
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
