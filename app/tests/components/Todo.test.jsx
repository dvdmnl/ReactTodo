import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
    it('Should Exist', () => {
        expect(Todo).toExist();
    })

    it('Should dispatch TOGGLE_TODO action  on click', () => {
        var todoData = {
            id:11,
            text: 'Some text here',
            completed:true
        }

        var action = actions.startToggleTodo(todoData.id, !todoData.completed)
        var spy = expect.createSpy();
        var todo = ReactUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />)

        var $el = $(ReactDOM.findDOMNode(todo));
        ReactUtils.Simulate.click($el[0])

        expect(spy).toHaveBeenCalledWith(action);
    })


})