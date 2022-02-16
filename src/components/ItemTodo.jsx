import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/asyncActions';

const Item = ({ id, completed, title }) => {
    console.log('Item')
    const dispatch = useDispatch()
    const onRemove = () => dispatch(deleteTodo(id))
    const onToggle = () => dispatch(toggleTodo(id))

    return (
        <li key={id}>
            <input
                onChange={onToggle}
                checked={completed}
                type="checkbox" />
            <span>{title}</span>
            <span
                onClick={onRemove}
                className='symbol'>&times;</span>
        </li>
    )
};

export default React.memo(Item);