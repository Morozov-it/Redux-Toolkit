import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//action для получения всего списка дел
export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos', //это имя action, имя этой же функции
    //первый параметр это аргументы через dispatch
    async function (_, { rejectWithValue }) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            const data = await response.data
            return data //это попадает в action
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

//action для удаления конкретного элемента
export const deleteTodo = createAsyncThunk(
    'todo/deleteTodo',
    async function (id, { rejectWithValue }) {
        try {
            //удаление на сервере
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

            //удаление на клиенте в методе deleteTodo.fulfilled
            return id //это попадает в action.payload

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

//action для переключения конкретного элемента
export const toggleTodo = createAsyncThunk(
    'todo/toggleTodo',
    async function (id, { rejectWithValue, getState }) {
        //получение конкретного элемента для изменения на сервере
        const todo = getState().todos.todos.find(i => i.id === id)
        
        try {
            //редактирование на сервере
            await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`,
                { completed: !todo.completed },
                { headers: { 'Content-Type': 'application/json' } }
            )
            //редактирование на клиенте в методе
            //toggleTodo.fulfilled
            
            return id //это попадает в action.payload

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

//action для создания новго элемента
export const createTodo = createAsyncThunk(
    'todo/createTodo',
    async function (text, { rejectWithValue }) {
        //создание нового элемента для отправки на сервер
        const newTodo = {
            userId: 1,
            title: text,
            completed: false
        }
        try {
            //редактирование на сервере
            const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,
                newTodo,
                { headers: { 'Content-Type': 'application/json' } }
            )

            //получение нового элемента от сервера
            const data = await response.data

            return data //это попадает в action.payload

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);