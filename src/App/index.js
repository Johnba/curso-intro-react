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
      <TodoHeader>
          <TodoCounter 
              totalTodos={totalTodos} 
              completedTodos={completedTodos} />

          <TodoSearch 
              searchValue={searchValue} 
              setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
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
      </TodoList>

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
