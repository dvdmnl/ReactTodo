import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';

import {TodoSearch} from 'TodoSearch'


describe('TodoSearch', () => {
    it('Should Exist', () => {
        expect(TodoSearch).toExist();
    })

    it('Should dispatch SET_SEARCH_TEXT on input change', () => {
        var searchText = 'Dog';
        var action = {
            type:'SET_SEARCH_TEXT',
            searchText
        }
        var spy = expect.createSpy();
        var todoSearch = ReactUtils.renderIntoDocument(<TodoSearch dispatch={spy} />)
        todoSearch.refs.searchText.value = searchText;
        ReactUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action)
    })

    it('Should dispatch TOGGLE_SHOW_COMPLETED when checkbox is checked', () => {
        var spy = expect.createSpy();
        var action = {
            type:'TOGGLE_SHOW_COMPLETED'
        }
        var todoSearch = ReactUtils.renderIntoDocument(<TodoSearch dispatch={spy} />)

        todoSearch.refs.showCompleted.checked = true;
        ReactUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);

    })
})