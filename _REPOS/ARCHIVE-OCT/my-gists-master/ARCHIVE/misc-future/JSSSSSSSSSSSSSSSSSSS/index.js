const initialState = {
  todos: [
    {
      id: 1,
      value: "Learn at Lambda School",
      completed: false,
    },
  ],
  input: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_INPUT":
      return Object.assign({}, state, { input: action.payload });

    case "ADD_TODO":
      // handle empty input
      if (state.input === "") {
        return Object.assign({}, state, { todos: state.todos, input: "" });
      }

      // setup an id for the new todo
      const nextId = state.todos.length + 1;

      // set the next todo object up
      let nextTodo = { id: nextId, value: state.input, completed: false };
      // take a clice of the todos
      let addTodos = state.todos.slice();

      // push the next todo in to the addTodos
      addTodos.push(nextTodo);

      // update the store using object assign
      return Object.assign({}, state, { todos: addTodos, input: "" });

    case "TOGGLE_TODO":
      // slice up the todos
      let toggleTodos = state.todos.slice();

      // map over the todos and toggle the completed state of each one with the id from payload
      toggleTodos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });
      // return the toggled state of todos back to the caller
      return Object.assign({}, state, { todos: toggleTodos });

    case "DELETE_TODO":
      let deleteTodos = state.todos
        .slice()
        .filter((todo) => todo.id !== action.payload);
      return Object.assign({}, state, { todos: deleteTodos });

    default:
      return state;
  }
};
