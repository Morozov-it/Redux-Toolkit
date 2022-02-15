import React, { useState } from 'react'


const AddTodo = ({ addTodo }) => {
    console.log('Add')
    const [text, setText] = useState('')

    return (
        <div className="add">
            <h2>Create new todo</h2>
            <label>
                <input
                    placeholder='add...'
                    onChange={(e)=>setText(e.target.value)}
                    value={text}
                    type="text" />
            </label>
            <button onClick={() => {
                addTodo(text)
                setText('')
            }}>Add</button>
        </div>
    )
}

export default React.memo(AddTodo)