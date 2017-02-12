import React from 'react';
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'


class ToDoApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showCompleted:false,
            searchText:'',
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
                <TodoList todos={todos} />
                <AddTodo onSetAddTodo={this.handleAddTodo} />
                <TodoSearch onSearch={this.handleSearch} />
            </div>
        )
    }
}

ToDoApp.defaultProps = {

}

ToDoApp.ProppTypes = {

}

export default ToDoApp;