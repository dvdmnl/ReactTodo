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
})