import React from 'react';
import moment from 'moment'

class Todo extends React.Component {
    render(){
        var {text,id,completed,completedAt,createAt} = this.props
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
            <div onClick={() => {
                this.props.onToggle(id)
            }}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>

            </div>
        )
    }
}

export default Todo;