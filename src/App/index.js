import React from 'react';
//import { TodoProvider } from '../TodoContext';
import { useTodos } from './useTodos';
//import { AppUI } from './AppUI'; //Desactivado porque ya no vamos a usar React Context
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    
    totalTodos, 
    completedTodos,

    searchValue, 
    setSearchValue,

    addTodo, 


  //} = React.useContext(TodoContext); //Usando React Context
  } = useTodos(); //Custom Hook

  // return (
  //   <TodoProvider>
  //     <AppUI />
  //   </TodoProvider>
  // );

  return (
    <React.Fragment>
      <TodoHeader loading={loading} >
          <TodoCounter 
              totalTodos={totalTodos} 
              completedTodos={completedTodos}
              //loading={loading} 
            />

          <TodoSearch 
              searchValue={searchValue} 
              setSearchValue={setSearchValue}
              //loading={loading} 
            />
      </TodoHeader>

     {/* Enviamos Render Props */}
      <TodoList 
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={()=> <TodosError />}
        onLoading={()=> <TodosLoading />}
        onEmptyTodos={()=> <EmptyTodos />}
        onEmptySearchResults={
          (searchText)=> <p>No hay resultados para {searchText}</p>
        }

        // Esta es euna RENDER PROPS:
        // render={todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >

        {/*Esta es una RENDER FUNCTION: */}
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}

      </TodoList>

      {/* <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList> */}

      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );

}

export default App;
