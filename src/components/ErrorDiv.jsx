import React from 'react';
import { useSelector } from 'react-redux';

function ErrorDiv() {
  const error = useSelector(state=>state.todos.error)
  return (
    <div className={error ? "error" : ''}>
      <h1>{error}</h1>
    </div>
  )
};

export default React.memo(ErrorDiv);
