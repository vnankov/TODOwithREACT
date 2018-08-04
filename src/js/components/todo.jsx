import React from 'react'

class Todo extends React.Component{
    constructor(props){
        super(props)
        
        this.isChecked = this.isChecked.bind(this);
        this.state = {isCompleted : false}
        this.onDelete = this.onDelete.bind(this);
    }
    isChecked(){
        this.setState({ isCompleted : !this.state.isCompleted})
    }

    onDelete(ev){
        this.props.onDelete(this.props.id, ev)
    }
    render() {
        const { id, name } = this.props;
        let completedClassName = 'notCompleted'
        this.state.isCompleted 
            ? 
                completedClassName = 'completed' 
            :
                completedClassName = 'notCompleted'

        return (
            <div className="todo" id={id}>
                <h2 className={completedClassName}>{name}</h2>
                <div className="todo-aside">
                    <input type="checkbox" checked={this.state.isCompleted} onChange={this.isChecked} />
                    <button onClick={this.onDelete}>Delete</button>
                </div>
            </div>
        );
    }

}

export default Todo;