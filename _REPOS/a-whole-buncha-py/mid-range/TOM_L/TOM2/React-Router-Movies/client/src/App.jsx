import React, { Component } from "react";
import {Route} from 'react-router-dom';

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    /* 
      Rendering the Movie component in Route using the render property 
      and using a callback function that takes in props and passes them to 
      the rendered Movie Component. Also decomposing the props for easier 
      access to them using the elipses notation (spread operator).
    */
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={props =>
          <Movie {...props} addToSavedList={this.addToSavedList}/>
        } />
      </div>
    );
  }
}
