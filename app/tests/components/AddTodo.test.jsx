import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';

import {AddTodo} from 'AddTodo'

describe('AddTodo', () => {
    it('Should Exist', () => {
        expect(AddTodo).toExist();
    })

    it('Should dispatch ADD_TODO when valid todoText', () => {
        var todoText = 'Check Mail';
        var action = {
            type:'ADD_TODO',
            text:todoText
        }
        var spy = expect.createSpy();
        var addTodoForm = ReactUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todo.value = todoText;
        ReactUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);

    })


    it('Should not dispatch ADD_TODO on invalid text', () => {
        var todoText =''
        var spy = expect.createSpy();
        var addTodoForm = ReactUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todo.value = todoText;
        ReactUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();

    })
})