import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

//сборка всего state из редюсеров
export default configureStore({
    reducer: {
        todos: todoReducer
        //users: userReducer
    }
});