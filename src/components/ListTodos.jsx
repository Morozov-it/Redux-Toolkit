import React from 'react'
import ItemTodo from './ItemTodo'


const ListTodos = ({ todos, removeTodo, toggleCompleted }) => {
    console.log('List')

    if (!todos.length) return (<h2>Empty</h2>)
    return (
        <div className="list">
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) =>
                    <ItemTodo
                        key={todo.id}
                        removeTodo={removeTodo}
                        toggleCompleted={toggleCompleted}
                        {...todo} />
                )}
            </ul>
        </div>
    )
}

export default React.memo(ListTodos)