// TODO:: create some action creators

// input handler action takes in an input as a payload returns a HANDLE_INPUT action with a payload of input
export const handleInput = input => {
  return {
    type: 'HANDLE_INPUT',
    payload: input
  }
}

// add todo action returns a ADD_TODO action
export const addTodo = () => {
  return {
    type: 'ADD_TODO'
  }
}

// togle todo takes in an id and returns a TOGGLE_TODO action and a payload id
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

// delete todo takes in an id and returns a DELETE_TODO with a payload of id
export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}