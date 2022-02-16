import { createSlice } from '@reduxjs/toolkit';
import { createTodo, toggleTodo, deleteTodo, fetchTodos } from './asyncActions';

//вспомогательные функции для обработки загрузки и ошибок
const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
};
const setLoading = (state) => {
    state.status = 'loading'
    state.error = null
};

//создание части state для списка дел
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null
    },
    extraReducers: {
        //это методы для асинхронной работы
        //----------------------------------------------
        //получение всех элементов от сервера
        [fetchTodos.pending]: setLoading,
        [fetchTodos.fulfilled]: (state, action) => {
            state.todos = action.payload;
            state.status = 'resolved';
        },
        [fetchTodos.rejected]: setError,
        //----------------------------------------------
        //удаление конкретного элемента
        [deleteTodo.pending]: setLoading,
        [deleteTodo.fulfilled]: (state, action) => {
            state.todos = state.todos.filter((i) => i.id !== action.payload);
            state.status = 'resolved';
        },
        [deleteTodo.rejected]: setError,
        //----------------------------------------------
        //переключение конкретного элемента 
        [toggleTodo.pending]: setLoading,
        [toggleTodo.fulfilled]: (state, action) => {
            const toggleTodo = state.todos.find(i => i.id === action.payload);
            toggleTodo.completed = !toggleTodo.completed;
            state.status = 'resolved';
        },
        [toggleTodo.rejected]: setError,
        //----------------------------------------------
        //создание нового элемента
        [createTodo.pending]: setLoading,
        [createTodo.fulfilled]: (state, action) => {
            state.todos.push(action.payload);
            state.status = 'resolved';
        },
        [createTodo.rejected]: setError,
        //----------------------------------------------
    }
});

//экспорт части state как редюсер
export default todoSlice.reducer;