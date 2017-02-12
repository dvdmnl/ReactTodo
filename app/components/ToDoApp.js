import React from 'react';
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

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

    handleAddTodo = (text) => {
        alert('Add todo : ' + text);
    }


    render() {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
                <AddTodo onSetAddTodo={this.handleAddTodo} />
            </div>
        )
    }
}

export default ToDoApp;