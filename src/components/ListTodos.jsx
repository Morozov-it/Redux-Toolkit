import React from 'react'
import { useSelector } from 'react-redux'
import ItemTodo from './ItemTodo'


const ListTodos = () => {
    console.log('List')
    const todos = useSelector(state=> state.todos.todos)

    if (!todos.length) return (<h2>Empty</h2>)
    return (
        <div className="list">
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) =>
                    <ItemTodo
                        key={todo.id}
                        {...todo} />
                )}
            </ul>
        </div>
    )
}

export default React.memo(ListTodos)