import React, { Component } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import axios from "axios";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import AddMovie from "./Movies/AddMovie";

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      title: "",
      director: "",
      metascore: "",
      stars: ""
    };
  }

  handleAddMovie = event => {
    event.preventDefault();
    const newMovie = {
      title: this.state.title,
      director: this.state.director,
      metascore: this.state.metascore,
      stars: this.state.stars.split(", ")
    };

    axios
      .post("http://localhost:5000/api/movies", newMovie)
      .then(response => {
        this.setState({
          savedList: response.data,
          title: "",
          director: "",
          metascore: "",
          stars: ""
        });
        this.props.history.push('/');
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSetData = (data, id) => {
    const savedList = this.state.savedList.filter(saved => saved.id !== id);
    console.log("Data: ", data);
    this.setState({ savedList });
    if (id) { this.props.history.push('/') }
  }

  addToSavedList = movie => {
    console.log(this.state.savedList);
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div className="nav-btn">
          <Link to="/movies/add">Add</Link>
        </div>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route
            path="/movies/add"
            render={props => {
              return (
                <AddMovie
                  {...props}
                  title={this.state.title}
                  director={this.state.director}
                  metascore={this.state.metascore}
                  stars={this.state.stars}
                  handleChange={this.handleChange}
                  handleAddMovie={this.handleAddMovie}
                />
              );
            }}
          />
          <Route
            path="/movies/:id"
            render={props => {
              return <Movie {...props} addToSavedList={this.addToSavedList} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
