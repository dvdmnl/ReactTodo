import React from 'react';
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import uuid from 'node-uuid'
import TodoAPI from 'TodoAPI'


class ToDoApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showCompleted:false,
            searchText:'',
            todos : TodoAPI.getTodos()
        }
    };

    componentDidUpdate () {
        TodoAPI.setTodos(this.state.todos)
    }

    handleAddTodo = (text, completed) => {
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
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

    handleToggle = (id) => {
        var updateTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo
        })
        this.setState({
            todos: updateTodos
        })

    }
    render() {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList onToggle={this.handleToggle} todos={todos} />
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