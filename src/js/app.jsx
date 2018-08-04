import React from 'react';
import { hot } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './components/todoApp'

const store = createStore(function todosReducer(state = { todos: [], filter: "" }, action) {
  switch(action.type) {
    case 'CREATE_TODO':
      return Object.assign({}, state, {
        todos: [...state.todos, { id: Math.random(), name: action.todo.name, isCompleted: false }]
      });

    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id)
      });
    default:
      return state;
  }
});

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
};

export default hot(module)(App);
