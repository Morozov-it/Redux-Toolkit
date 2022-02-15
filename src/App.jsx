import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'
//import useLocalStorage from './hooks/useLocalStorage'
import './app.css'
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'

const App = () => {
    console.log('App')
    const dispatch = useDispatch()
    const onAdd = (text) => dispatch(addTodo(text))

    //const [todos, setTodos] = useLocalStorage([], 'todos')
    
    // const addTodo = (text) => {
    //     if (text.trim().length) {
    //         const newTodo = {
    //             id: new Date().toISOString(),
    //             text,
    //             completed: false
    //         }
    //         setTodos((prev) => [...prev, newTodo] )
    //     }
    //     return
    // }
    // const removeTodo = (id) => {
    //     setTodos( todos.filter((i)=> i.id !== id) )
    // }
    // const toggleCompleted = (id) => {
    //     setTodos(todos.map((todo) => {
    //         if (todo.id !== id) return todo;
    //         return {
    //             ...todo,
    //             completed: !todo.completed
    //         }
    //     }))
    // }


    return (
        <div className="container">
            <AddTodo addTodo={onAdd} />
            <ListTodos />
        </div>
    )
}

export default React.memo(App)
