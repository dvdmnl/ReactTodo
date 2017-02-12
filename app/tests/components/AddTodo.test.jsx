import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';

import AddTodo from 'AddTodo'

describe('AddTodo', () => {
    it('Should Exist', () => {
        expect(AddTodo).toExist();
    })

    it('Should call onHandleAddTodo if entered valid text', () => {
        var spy = expect.createSpy();
        var addTodoForm = ReactUtils.renderIntoDocument(<AddTodo onSetAddTodo={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todo.value = 'Check Email';
        ReactUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('Check Email');

    })


    it('Should not call onHandleAddTodo if entered empty string', () => {
        var spy = expect.createSpy();
        var addTodoForm = ReactUtils.renderIntoDocument(<AddTodo onSetAddTodo={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todo.value = '';
        ReactUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();

    })
})