import React from 'react';
import Todo from 'Todo'


class TodoList extends React.Component {
    render(){
        var {todos} = this.props
        var renderTodoList = () => {
            return todos.map((todo) => {
                return <Todo key={todo.id} {...todo} />
            })
        }
        return(
            <div>
                {renderTodoList()}
            </div>
        )
    }
}

export default TodoList;