import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux'
import {configure} from 'configureStore'
import ConnectedTodoList,{TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo'

describe('TodoList', () => {
    it('Should Exist', () => {
        expect(TodoList).toExist();
    })

    it('Should render one Todo Component per each todo item', () => {
        var todos = [
            {
                id:1,
                text:'todo 1',
                completed:false,
                completedAt:undefined,
                createdAt:500
            },
            {
                id:2,
                text:'todo 2',
                completed:false,
                completedAt:undefined,
                createdAt:500
            }
        ]

        var store = configure({
            todos
        })

        var provider =  ReactUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        )

        var todoList = ReactUtils.scryRenderedComponentsWithType(provider,ConnectedTodoList)[0]
        var todosComponents = ReactUtils.scryRenderedComponentsWithType(todoList,ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);
    })



    it('Should render empty message if no todos', () => {
        var todos = []

        var todoList = ReactUtils.renderIntoDocument(<TodoList todos={todos} />)
        var $el = $(ReactDOM.findDOMNode(todoList))

        expect($el.find('.container__message').length).toBe(1)
    })

})