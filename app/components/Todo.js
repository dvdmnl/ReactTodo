    import React from 'react';
import moment from 'moment'
import {connect} from 'react-redux';
var actions = require('actions');

export class Todo extends React.Component {
    render(){
        var {text, id, completed, completedAt, createAt, dispatch} = this.props
        var todoClassName = completed ? 'todo todo-completed' : 'todo'
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createAt;

            if(completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
        }
        return(
            <div className={todoClassName} onClick={() => {
                //this.props.onToggle(id)
                dispatch(actions.toggleTodo(id))
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
}

export default connect()(Todo);


