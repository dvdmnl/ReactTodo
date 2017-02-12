import React from 'react';
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import uuid from 'node-uuid'


class ToDoApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showCompleted:false,
            searchText:'',
            todos : [
                {
                    id:uuid(),
                    text:'Walk the dog'
                },
                {
                    id:uuid(),
                    text:'Buy Milk'
                }
            ]
        }
    };

    handleAddTodo = (text) => {
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        })
    }

    handleSearch = (showCompleted,searchText) => {
        this.setState({
            showCompleted:showCompleted,
            searchText:searchText.toLowerCase()
        })
    }
    render() {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onSetAddTodo={this.handleAddTodo} />
            </div>
        )
    }
}

ToDoApp.defaultProps = {

}

ToDoApp.ProppTypes = {

}

export default ToDoApp;