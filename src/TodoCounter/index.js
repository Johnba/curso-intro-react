import React from 'react';
//import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter( {totalTodos, completedTodos, loading} ) {
  //const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <h2 className={`TodoCounter ${ !!loading && "TodoCounter--loading" }`}> 
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
