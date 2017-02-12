import  React from 'react';

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
    };

    onSubmit = (e) => {
        e.preventDefault();
        var strTodo = this.refs.todo.value;
        if(strTodo.length > 1) {
            this.refs.todo.value = '';
            this.props.onSetAddTodo(strTodo);
        } else {
            this.refs.todo.focus();
        }

    }

    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
                    <input type="text" ref="todo" placeholder="Enter Time In Seconds"/>
                    <button className="button expanded">Add to do</button>
                </form>
            </div>
        )
    }
}

export  default AddTodo;