import React, { useState } from 'react'
import './app.css'
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'

const App = () => {
    console.log('App')
    const [todos, setTodos] = useState([])
    
    const addTodo = (text) => {
        if (text.trim().length) {
            const newTodo = {
                id: new Date().toISOString(),
                text,
                completed: false
            }
            setTodos((prev) => [...prev, newTodo] )
        }
        return
    }
    const removeTodo = (id) => {
        setTodos( todos.filter((i)=> i.id !== id) )
    }
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }


    return (
        <div className="container">
            <AddTodo {...{ addTodo }} />
            <ListTodos {...{ todos, removeTodo, toggleCompleted }}/>
        </div>
    )
}

export default React.memo(App)
