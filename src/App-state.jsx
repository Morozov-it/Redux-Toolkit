import React, { useState } from 'react'
import './app.css'
//импорт компонент
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'
import Loading from './components/Loading'

const App = () => {
    console.log('App')

    const [todos, setTodos] = useLocalStorage([], 'todos')
    const [loading, setLoading] = useState(false)

    const addTodo = (text) => {
        setLoading(true);
        setTimeout(() => {
            if (text.trim().length) {
                const newTodo = {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
                setTodos((prev) => [...prev, newTodo] )
            }
            setLoading(false);
            return;
        }, 500)
    }
    const removeTodo = (id) => {
        setLoading(true);
        setTimeout(() => {
            setTodos(todos.filter((i) => i.id !== id));
            setLoading(false);
        }, 500)
    }
    const toggleCompleted = (id) => {
        setLoading(true);
        setTimeout(() => {
            setTodos(todos.map((todo) => {
                if (todo.id !== id) return todo;
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }));
            setLoading(false);
        }, 500)
    }

    return (
        <Loading active={loading}>
            <div className="container">
                <AddTodo {...{ addTodo }} />
                <ListTodos {...{removeTodo, toggleCompleted}} />
            </div>
        </Loading>
    )
}

export default React.memo(App)
