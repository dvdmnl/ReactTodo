import React from 'react';
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import uuid from 'node-uuid'
import TodoAPI from 'TodoAPI'
import moment from 'moment'

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
                    completed: false,
                    createAt:moment().unix(),
                    completedAt: undefined
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
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filteredTodos(todos,showCompleted,searchText)

        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch} />
                            <TodoList/>
                            <AddTodo onSetAddTodo={this.handleAddTodo} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ToDoApp;