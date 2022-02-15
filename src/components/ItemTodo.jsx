import React from 'react'

const Item = ({ id, completed, text, toggleCompleted, removeTodo }) => {
    console.log('Item')
    return (
        <li key={id}>
            <input
                onChange={()=>toggleCompleted(id)}
                checked={completed}
                type="checkbox" />
            <span>{text}</span>
            <span
                onClick={()=>removeTodo(id)}
                className='symbol'>&times;</span>
        </li>
    )
}
export default React.memo(Item)