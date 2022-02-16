import React from 'react';
import { useSelector } from 'react-redux';


function Loading() {
  const status = useSelector(state=>state.todos.status)
  return (
    <div className={status==='loading' ? "loading" : ''}>
    </div>
  )
};

export default React.memo(Loading);
