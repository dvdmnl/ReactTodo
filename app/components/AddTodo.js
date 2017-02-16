import  React from 'react';
import {connect} from 'react-redux'
var actions = require('actions');


export class AddTodo extends React.Component {

    constructor(props) {
        super(props);
    };

    onSubmit = (e) => {
        e.preventDefault();
        var {dispatch} = this.props;
        var strTodo = this.refs.todo.value;
        if(strTodo.length > 1) {
            this.refs.todo.value = '';
            dispatch(actions.startAddTodo(strTodo))
        } else {
            this.refs.todo.focus();
        }

    }

    render() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
                    <input type="text" ref="todo" placeholder="Enter New Task"/>
                    <button className="button expanded">Add to do</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo);