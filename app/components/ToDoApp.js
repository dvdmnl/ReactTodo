import React from 'react';
import TodoList from 'TodoList'

class ToDoApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos : [
                {
                    id:1,
                    text:'Walk the dog'
                },
                {
                    id:2,
                    text:'Buy Milk'
                }
            ]
        }
    };

    render() {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
            </div>
        )
    }
}

export default ToDoApp;