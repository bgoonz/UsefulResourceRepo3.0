import React, { Component } from 'react';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
