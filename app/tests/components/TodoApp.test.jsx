import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux';
var configureStore = require('configureStore');

import {TodoApp} from 'TodoApp';
import TodoList from 'TodoList';


describe('TodoApp', () => {
    it('Should Exist', () => {
        expect(TodoApp).toExist();
    })

    it ('Should render todo list', () => {
        var store = configureStore.configure();
        var provider = ReactUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp/>
            </Provider>
        )

        var todoApp = ReactUtils.scryRenderedComponentsWithType(provider,TodoApp)[0]
        var todoList = ReactUtils.scryRenderedComponentsWithType(todoApp, TodoList)

        expect(todoList.length).toEqual(1)

    })
})