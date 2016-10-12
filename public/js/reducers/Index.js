export default function todos(state = {todos: [1, 2, 4]}, action) {
    if (action.type === 'DISPLAY') {
        state.todos.push(action.todo);
        return state;
    }
    return state;
}