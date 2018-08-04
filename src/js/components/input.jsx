import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            todoName : ''
        }
        this.addTodo = this.addTodo.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addTodo(ev){
        ev.preventDefault();
        if(this.state.todoName !== ''){
            this.props.createTodo(this.state.todoName)
        }
        this.setState({ todoName : '' })
    }

    onChange({target}){
        this.setState({ todoName : target.value})
    }

    render(){
        return(
            <form onSubmit={this.addTodo}>
                <p>Write something now, to suits you later!</p>
                <input 
                    type='text' 
                    onChange={this.onChange} 
                    value={this.state.todoName}/>

                <button>Add</button>
            </form>
        )
    }
}

export default Input;