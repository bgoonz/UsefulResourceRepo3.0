import React from "react";
import { connect } from "react-redux";
import { handleInput, addTodo } from "../../actions";
import "./index.css";
class TodoForm extends React.Component {
  handleChange = e => {
    this.props.handleInput(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo();
  };

  render() {
    return (
      <div id="myDIV" class="header">
        <h2>TODO LIST - REDUX</h2>
        <input
          type="text"
          value={this.props.input}
          id="myInput"
          placeholder="Title..."
          onChange={this.handleChange}
        />
        <span onClick={this.handleSubmit} className="addBtn">
          Add
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    input: state.input
  };
};

export default connect(
  mapStateToProps,
  { handleInput, addTodo }
)(TodoForm);
