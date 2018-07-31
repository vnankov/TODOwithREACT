import React from 'react'
import Todo from './todo'

class TodoList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        const { children } = this.props;
        return(
            <ul>
                {
                    React.Children.map(children, (child) => <li>{child} </li>)
                }
            </ul>
        )
    }
}

export default TodoList;