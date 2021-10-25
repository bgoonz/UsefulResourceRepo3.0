import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SeachBar';
import PostContainer from './PostContainer';
import postData from './application-data';

class App extends Component {
  constructor() {
    super();
      this.state = {
        search: '',
        posts: []
      };
      this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const things = postData;
    console.log(things);
    console.log(Array.isArray(things));
    this.setState({posts: things});
    console.log(this.state.posts);
  }

  handleSearch(event) {
    let newSearch = this.state.search;
    newSearch = event.target.value;
    this.setState({search: newSearch});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
       <SearchBar search={this.state.search} handleSearch={this.handleSearch} />
       <ul>
        <PostContainer props={this.state.posts} />
       </ul>
      </div>
    );
  }
}

export default App;
