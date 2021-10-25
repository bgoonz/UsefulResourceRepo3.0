import React from "react";
import { connect } from "react-redux";
import Todo from "../Todo";

const TodoList = props => {
  return (
    <div>
      {props.todos.map((todo, index) => {
        return <Todo todo={todo} key={index} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
