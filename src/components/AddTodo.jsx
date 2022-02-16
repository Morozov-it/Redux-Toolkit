import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../store/asyncActions';


const AddTodo = () => {
    console.log('Add')
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onAdd = useCallback(() => {
        dispatch(createTodo(text))
    }, [text])

    return (
        <div className="add">
            <h2>Create new todo</h2>
            <label>
                <input
                    placeholder='add...'
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    type="text" />
            </label>
            <button onClick={() => {
                onAdd(text)
                setText('')
            }}>Add</button>
        </div>
    )
};

export default React.memo(AddTodo);