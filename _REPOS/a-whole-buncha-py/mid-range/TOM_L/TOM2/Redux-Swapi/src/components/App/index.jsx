import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../logo.svg';
import '../../styles/App.css';
// pull in actions from action/index
import { getChars } from '../../actions';
class App extends Component {
  componentDidMount() {
    // call our action
    this.props.getChars();
  }
  render() {
    return (
      <div className="App">
      <div>
          <h1> SWAPI REDUX</h1>
      </div>
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapDispatchToProps = (dispatch) => {
  return {
    chars: dispatch.charsReducer.chars,
    fetching: dispatch.charsReducer.fetching
  }
}
export default connect(mapDispatchToProps, { getChars })(App);
