import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';

import TodoSearch from 'TodoSearch'


describe('TodoSearch', () => {
    it('Should Exist', () => {
        expect(TodoSearch).toExist();
    })

    it('Should call onSearch with entered input text', () => {
        var searchText = 'Dog';
        var spy = expect.createSpy();
        var todoSearch = ReactUtils.renderIntoDocument(<TodoSearch onSearch={spy} />)
        todoSearch.refs.searchText.value = searchText;
        ReactUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false,'Dog')
    })

    it('Should call onSearch with proper check value', () => {
        var spy = expect.createSpy();
        var todoSearch = ReactUtils.renderIntoDocument(<TodoSearch onSearch={spy} />)

        todoSearch.refs.showCompleted.checked = true;
        ReactUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true,'');

    })
})