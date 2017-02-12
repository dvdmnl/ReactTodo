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
        expect(todoApp.state.todos[0].createAt).toBeA('number');
    })

    it('Should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test something',
            completed: false,
            createAt: 0,
            completedAt: undefined
        }

        var todoApp = ReactUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos:[todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(11);

        expect(todoApp.state.todos[0].completed).toBe(true);

        expect(todoApp.state.todos[0].completedAt).toBeA('number');


    })


    it('Should toggle todo from completed to uncomplete', () => {
        var todoData = {
            id: 11,
            text: 'Test something',
            completed: true,
            createAt: 0,
            completedAt: undefined
        }

        var todoApp = ReactUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos:[todoData]});

        expect(todoApp.state.todos[0].completed).toBe(true);

        todoApp.handleToggle(11);

        expect(todoApp.state.todos[0].completed).toBe(false);

        expect(todoApp.state.todos[0].completedAt).toNotExist();


    })


})