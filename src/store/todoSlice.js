import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: { //это набор методов
        addTodo(state, action) {
            //proxy скрывает момент мутации поэтому можно без копий
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((i) => i.id !== action.payload)
        },
        toggleCompleted(state, action) {
            const toggleTodo = state.todos.find(i => i.id === action.payload.id)
            toggleTodo.completed = !toggleTodo.completed
        }
    }
})

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions

export default todoSlice.reducer