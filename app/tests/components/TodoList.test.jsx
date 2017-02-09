import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';

import TodoList from 'TodoList'
import Todo from 'Todo'

describe('TodoList', () => {
    it('Should Exist', () => {
        expect(TodoList).toExist();
    })

    it('Should render one Todo Component per each todo item', () => {
        var todos = [
            {
                id:1,
                text:'todo 1'
            },
            {
                id:2,
                text:'todo 2'
            }
        ]

        var todoList = ReactUtils.renderIntoDocument(<TodoList todos={todos} />)
        var todosComponents = ReactUtils.scryRenderedComponentsWithType(todoList,Todo);

        expect(todosComponents.length).toBe(todos.length);
    })
})