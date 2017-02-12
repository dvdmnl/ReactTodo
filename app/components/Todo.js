import React from 'react';

class Todo extends React.Component {
    render(){
        var {text,id} = this.props
        return(
            <div>{id + ': ' + text}</div>
        )
    }
}

export default Todo;