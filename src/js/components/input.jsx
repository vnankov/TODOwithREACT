import React from 'react'

class Input extends React.Component{

    render(){
        return(
            <form>
                <p>Write something now, to suits you later!</p>
                <input type='text'/>
                <button>Done</button>
            </form>
        )
    }
}

export default Input;