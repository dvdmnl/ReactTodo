import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp'

describe('TodoApp', () => {
    it('Should Exist', () => {
        expect(TodoApp).toExist();
    })

    it('Should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'Test text';
        var todoApp = ReactUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({
            todos : []
        })

        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe('Test text');
    })

    it('Should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test something',
            completed: false
        }

        var todoApp = ReactUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos:[todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(11);

        expect(todoApp.state.todos[0].completed).toBe(true);


    })


})