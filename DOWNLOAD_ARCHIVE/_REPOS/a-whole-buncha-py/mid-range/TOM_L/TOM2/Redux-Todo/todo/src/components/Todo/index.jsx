import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../../actions";
import "./index.css";

const Todo = props => {
  return (
    <ul id="myUL">
      <li
        key={Math.random()}
        onClick={() => props.toggleTodo(props.todo.id)}
        className={props.todo.completed ? "checked" : ""}
      >
        {props.todo.value}<span
        className={props.todo.completed ? "close" : "close"}
        onClick={() => props.deleteTodo(props.todo.id)}
      >
        X
      </span></li>

    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo, deleteTodo }
)(Todo);
