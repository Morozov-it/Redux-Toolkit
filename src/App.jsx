import React, { useEffect } from 'react';
//импорт стилей
import './app.css';
//получение данных из redux store
import { useDispatch } from 'react-redux';
import { fetchTodos } from './store/asyncActions';
//импорт компонент
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';
import Loading from './components/Loading';
import ErrorDiv from './components/ErrorDiv';


const App = () => {
    console.log('App')
    const dispatch = useDispatch()

    useEffect(() => {
        //если больше одного параметра то параметр как объект в action
        dispatch(fetchTodos())
    }, [])

    return (
        <>
            <Loading />
            <ErrorDiv />
            <div className="container">
                <AddTodo />
                <ListTodos />
            </div>
        </>
    )
};

export default React.memo(App);
