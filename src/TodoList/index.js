import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText) }

      {/*props.searchTodos.map(todo => props.render(todo))*/ }
      {/*props.searchedTodos.map(props.render)*/} {/*Forma mas corta*/}
      {/*props.searchedTodos.map(props.children)*/} {/*Imprimer la Render Function */}

      {props.searchedTodos.map(renderFunc)} {/*Utilizarmos variable para imprimer el Render Props, o el Render Function */}
      

      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
