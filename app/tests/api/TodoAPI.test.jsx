import expect from 'expect';
import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {

    beforeEach(() => {
        localStorage.removeItem('todos');
    })

    it('Should Exist', () => {
        expect(TodoAPI).toExist();
    })


    describe('setTodos', () => {
        it('Should set valid todos array', () => {
            var todos = [{
                id:23,
                text: 'test all files'
            }]

            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        })


        it('Should not set invalid todos array', () => {
            var badTodos = {a: 'b'}
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        })

    })

    describe('getTodos', () => {
        it('Should return empty array fot bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([])
        })

        it('Should return todo if valid array in localStorage', () => {
            var todos = [{
                id:23,
                text: 'test all files'
            }]

            localStorage.setItem('todos', JSON.stringify(todos))

            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos)
        })

    })
})