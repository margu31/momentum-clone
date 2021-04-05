const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';

let nextNumber = 1;

export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    number: nextNumber++,
    text,
  },
});

export const toggleTodo = number => ({
  type: TOGGLE_TODO,
  number,
});

export const deleteTodo = number => ({
  type: DELETE_TODO,
  number,
});

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.number === action.number
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case DELETE_TODO:
      return state.filter(todo => todo.number !== action.number);
    default:
      return state;
  }
};

export default todosReducer;
