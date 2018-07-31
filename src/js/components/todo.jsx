import React from 'react'

class Todo extends React.Component{

    render() {
        const { id, isCompleted, name } = this.props;

        return (
            <div className="todo" id={id}>
                <h2>This is your todo</h2>
                <div className="todo-aside">
                    <input type="checkbox" />
                    <button>Delete</button>
                </div>
            </div>
        );
    }

}

export default Todo;