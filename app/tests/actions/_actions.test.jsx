var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase/index';
import * as actions from 'actions';


var createMockStore = configureMockStore([thunk])

describe('Actions', () => {
    it('Should generate search test action', () => {
        var action = {
            type:'SET_SEARCH_TEXT',
            searchText:'Some search text'
        }

        var res = actions.setSearchText(action.searchText)

        expect(res).toEqual(action);
    })

    it('Should generate toggle-show-completed action', () => {
        var action = {
            type:'TOGGLE_SHOW_COMPLETED'
        }

        var res = actions.toggleShowCompleted()
        expect(res).toEqual(action);
    })

    it('Should generate ADD_TODO action', () => {
        var action = {
            type:'ADD_TODO',
            todo : {
                id:'abc123',
                text:'Walk the dog',
                completed:false,
                createAt:0
            }
        }

        var res = actions.addTodo(action.todo)

        expect(res).toEqual(action);
    })

    it('Should generate ADD_TODOS action', () => {
        var todos=[
            {
                id:'111',
                text:'anything',
                completed:false,
                completedAt:undefined,
                createdAt:33000
            }
        ]

        var action = {
            type:'ADD_TODOS',
            todos
        }

        var res = actions.addTodos(todos);

        expect(res).toEqual(action);

    })

    it('Should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'My Todo item';

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();

            expect(actions[0]).toInclude({
                type:'ADD_TODO'
            })

            expect(actions[0].todo).toInclude({
                text:todoText
            })

            done();
        }).catch(done)
    })

    it('Should generate UPDATE_TODO action', () => {
        var action = {
            type:'UPDATE_TODO',
            id:'123',
            updates:{completed:false}
        }

        var res = actions.updateTodo(action.id, action.updates)

        expect(res).toEqual(action);
    })

    describe('Tests with firebase todos', () => {
        var testTodosRef;

        beforeEach((done) => {
            testTodosRef = firebaseRef.child('todos').push();

            testTodosRef.set({
                text:'Something To do',
                completed:false,
                createAt:5453451
            }).then(() => done())
        })

        afterEach((done) => {
            testTodosRef.remove().then(() => done())
        })

        it('Should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodosRef.key, true);
            const mockActions = store.getActions();
            
            store.dispatch(action).then(() => {
                expect(mockActions[0]).toInclude({
                    type:'UPDATE_TODO',
                    id:testTodosRef.key
                })
                expect(mockActions[0].updates).toInclude({
                    completed: true
                })
                expect(mockActions[0].updates.completedAt).toExist()


                done()
            },done)
        })
    })

})