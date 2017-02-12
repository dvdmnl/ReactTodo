import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';


import Todo from 'Todo'

describe('Todo', () => {
    it('Should Exist', () => {
        expect(Todo).toExist();
    })

    it('Should call onToggle prop with id on click', () => {
        var todoData = {
            id:11,
            text: 'Some text here',
            completed:true
        }

        var spy = expect.createSpy();
        var todo = ReactUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />)

        var $el = $(ReactDOM.findDOMNode(todo));
        ReactUtils.Simulate.click($el[0])

        expect(spy).toHaveBeenCalledWith(11);
    })


})