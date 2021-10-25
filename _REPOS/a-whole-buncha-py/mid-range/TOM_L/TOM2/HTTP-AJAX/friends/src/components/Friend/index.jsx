import React from "react";
import "../../App.css";
import axios from "axios";
import Form from "../Form";

class Friend extends React.Component {
  state = {
    friend: null,
    isEditing: false,
    name: "",
    timezone: "",
    email: "",
    telephone: "",
    avatar: ""
  };

  componentDidMount() {
    axios
      .get(`http://datasrv-tomtarpeydev687003.codeanyapp.com:5000/friends/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          friend: response.data,
          name: response.data.name,
          timezone: response.data.timezone,
          email: response.data.email,
          telephone: response.data.telephone,
          avatar: response.data.avatar
        });
      })
      .catch(error => console.log(error));
  }

  toggleEditMode = event => {
    event.preventDefault();

    this.setState({ isEditing: true });
  };

  handleEditChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEditCancel = event => {
    event.preventDefault();
    this.setState({
      isEditing: false,
      name: "",
      timezone: "",
      email: "",
      telephone: "",
      avatar: ""
    });
  };

  handleEditFriend = event => {
    event.preventDefault();

    const editedFriend = {
      name: this.state.name,
      timezone: this.state.timezone,
      email: this.state.email,
      telephone: this.state.telephone,
      avatar: this.state.avatar
    };

    axios
      .put(
        `http://datasrv-tomtarpeydev687003.codeanyapp.com:5000/friends${this.props.match.params.id}`, editedFriend)
      .then(response => {
        const friend = response.data.find(friend => friend.id === Number(this.props.match.params.id));

        this.setState({ isEditing: false, friend });
      })
      .catch(error => console.log(error));
  };

  handleDelete = event => {
    event.preventDefault();

    axios
      .delete(`http://datasrv-tomtarpeydev687003.codeanyapp.com:5000/friends${this.props.match.params.id}`)
      .then(response => {
        this.setState({ friend: null });
        this.props.handleUpdateFriends(
          response.data,
          Number(this.props.match.params.id)
        );
      })
      .catch(error => console.log(error));
  };

  render() {
    if (!this.state.friend) {
      return <div>Loading friend info...</div>;
    }

    if (this.state.isEditing) {
      return (
        <Form
          name={this.state.name}
          timezone={this.state.timezone}
          email={this.state.email}
          telephone={this.state.telephone}
          avatar={this.state.avatar}
          handleChange={this.handleEditChange}
          handleCancel={this.handleEditCancel}
          handleFriendSubmit={this.handleEditFriend}
        />
      );
    }

    return (
      <div className="friend">
        <img src={this.state.friend.avatar} />
        <div className="friendDetailsWrapper">
          <div className="friendDetails">
            <b>Name:</b> {this.state.friend.name}
          </div>
          <div className="friendDetails">
            <b>TimeZone:</b> {this.state.friend.timezone}
          </div>
          <div className="friendDetails">
            <b>Email:</b> {this.state.friend.email}
          </div>
          <div className="friendDetails">
            <b>Telephone:</b> {this.state.friend.telephone}
          </div>
        </div>

        <button onClick={this.toggleEditMode}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Friend;
