import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch, withRouter } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend";
import Form from "./components/Form";
import Header from "./components/Header";

class App extends Component {
  state = {
    friends: [],
    name: "",
    timezone: "",
    email: "",
    telephone: "",
    avatar: "",
    search: ""
  };

  componentDidMount() {
    axios
      .get("http://datasrv-tomtarpeydev687003.codeanyapp.com:5000/friends/")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFriendSubmit = event => {
    if (this.state.name === "") {
      this.props.history.push("/");
      return;
    }

    event.preventDefault();

    const newFriend = {
      name: this.state.name,
      timezone: this.state.timezone,
      email: this.state.email,
      telephone: this.state.telephone,
      avatar: this.state.avatar
    };

    axios
      .post(
        "http://datasrv-tomtarpeydev687003.codeanyapp.com:5000/friends/",
        newFriend
      )
      .then(response => {
        this.setState({
          friends: response.data,
          name: "",
          timezone: "",
          email: "",
          telephone: "",
          avatar: ""
        });
      })
      .catch(error => console.log(error));

    this.props.history.push("/");
  };

  handleSearch = event => {
    event.preventDefault();
    // TODO: might add a search functionality at some point
  };

  handleCancel = event => {
    event.preventDefault();
    this.setState({
      name: "",
      timezone: "",
      email: "",
      telephone: "",
      avatar: ""
    });
    this.props.history.push("/");
  };

  handleUpdateFriends = (data, deletedFriendId) => {
    const friends = this.state.friends.filter(
      friend => friend.id !== deletedFriendId
    );
    this.setState({ friends });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="wrapper">
        <Header />

        <Route
          exact
          path="/"
          render={props => <FriendsList friends={this.state.friends} />}
        />

        <Switch>
          <Route
            path="/friends/add"
            render={props => (
              <Form
                name={this.state.name}
                timezone={this.state.timezone}
                email={this.state.email}
                telephone={this.state.telephone}
                avatar={this.state.avatar}
                handleChange={this.handleChange}
                handleCancel={this.handleCancel}
                handleFriendSubmit={this.handleFriendSubmit}
              />
            )}
          />

          <Route
            path="/friends/:id"
            render={props => (
              <Friend
                {...props}
                handleUpdateFriends={this.handleUpdateFriends}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
