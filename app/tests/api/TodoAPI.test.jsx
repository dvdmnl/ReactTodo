import expect from 'expect';
import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {

    beforeEach(() => {
        localStorage.removeItem('todos');
    })

    it('Should Exist', () => {
        expect(TodoAPI).toExist();
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