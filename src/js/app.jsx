import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './components/todoList';
import Input from './components/input';
import Todo from './components/todo';

class App extends React.Component {

  render() {
    const { todos } = this.props;

    return (
      <div>
        <Input />
          <TodoList>
                  <Todo name={name}/>
                  <Todo name={name}/>
                  <Todo name={name}/>
                  <Todo name={name}/>

          </TodoList>
        </div>
    );
  }
};

export default hot(module)(App);
