import React from 'react'
import TodoList from './todoList';
import Input from './input';
import Todo from './todo';
import { connect } from 'react-redux';

class TodosApp extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { todos } = this.props;

        return(
            <div>
                <Input createTodo={this.props.createTodo}/>
                <TodoList>
                    {
                        todos.map(todo =>
                            <Todo name={todo.name}
                                key={todo.id}
                                id={todo.id}
                                onDelete={this.props.deleteTodo}
                            />
                        )
                    }
                </TodoList>
          </div>
        )
    }
}


function mapStateToProps(state) {
    const { todos } = state;

    return {
        todos: todos
    };
}

function mapDispatchToProps(dispatch) {
    return {  
        createTodo(name) {
            const createTodoAction = {
                type: 'CREATE_TODO',
                todo: {
                    name
                }
            };

            dispatch(createTodoAction);
        },

        deleteTodo(id){
            const deleteTodoAction = {
                type : 'DELETE_TODO',
                id
            }
            dispatch(deleteTodoAction)
        }

        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosApp);
