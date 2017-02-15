import React from 'react';
import Todo from 'Todo'
import {connect} from 'react-redux';
var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {
    render(){
        var {todos, showCompleted,searchText} = this.props
        var renderTodoList = () => {
            if(todos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do</p>
                )

            }
            return TodoAPI.filteredTodos(todos, showCompleted, searchText).map((todo) => {
                return <Todo key={todo.id} {...todo}/>
            })
        }
        return(
            <div>
                {renderTodoList()}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return state
    }
)(TodoList);