var $ = require('jquery');

module.exports = {
    setTodos : function (todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos : function () {
        var strTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(strTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : []
    },
    filteredTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        })

        filteredTodos = filteredTodos.filter((todo) => {
            var todoText = todo.text.toLowerCase()
            return searchText.length === 0 || todoText.indexOf(searchText) > -1 ;
        })

        filteredTodos.sort((a,b) => {
            if(!a.completed && b.completed) {
                return -1
            } else if(a.completed && !b.completed) {
                return 1
            } else {
                return 0
            }

        })


        return filteredTodos;
    }
}