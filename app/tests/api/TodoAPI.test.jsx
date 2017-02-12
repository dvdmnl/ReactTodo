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

    describe('Filtered Todos', () => {
        var todos = [
            {
                id:1,
                text:'text 1',
                completed:true
            },
            {
                id:2,
                text:'text 2',
                completed:false
            },
            {
                id:3,
                text:'Some text 3',
                completed:true
            }
        ]

        it('Should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filteredTodos(todos,true,'')

            expect(filteredTodos.length).toBe(3);
        })

        it('Should return only non-completed todos if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filteredTodos(todos,false,'')

            expect(filteredTodos.length).toBe(1);
        })

        it('Should sort by completed status', () => {
            var filterdTodos = TodoAPI.filteredTodos(todos,true,'')
            expect(filterdTodos[0].completed).toBe(false);
        })

        it('Should filter todos by searchText', () => {
            var filterdTodos = TodoAPI.filteredTodos(todos,true,'some')
            expect(filterdTodos.length).toBe(1);
        })

        it('Should return all todos if searchText is empty', () => {
            var filterdTodos = TodoAPI.filteredTodos(todos,true,'')
            expect(filterdTodos.length).toBe(3);
        })



    })
})