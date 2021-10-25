import React, { Component } from "react";
import { Route } from 'react-router-dom';

import NavWrapper from "./components/NavWrapper";
import SubNav from "./components/SubNav";
import "./App.css"

class App extends Component {
  state = {
    links: [
      {
        name: "Mac"
      },
      {
        name: "iPad"
      },
      {
        name: "iPhone"
      },
      {
        name: "Watch"
      },
      {
        name: "TV"
      },
      {
        name: "Music"
      }
    ]
  };
  render() {
    return (
      <div className="wrapper">
        <NavWrapper links={this.state.links} />
        <Route path="/:name" render={props => <SubNav {...props} />} />
      </div>
    );
  }
}

export default App;
