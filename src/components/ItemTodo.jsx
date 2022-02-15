import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompleted, removeTodo } from '../store/todoSlice'

const Item = ({ id, completed, text }) => {
    console.log('Item')
    const dispatch = useDispatch()
    const onRemove = () => dispatch(removeTodo(id))
    const onToggle = () => dispatch(toggleCompleted({id}))

    return (
        <li key={id}>
            <input
                onChange={onToggle}
                checked={completed}
                type="checkbox" />
            <span>{text}</span>
            <span
                onClick={onRemove}
                className='symbol'>&times;</span>
        </li>
    )
}
export default React.memo(Item)