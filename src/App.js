import React, { useState } from 'react';

import './App.css';
import TodoInputs from './components/TodoInput/TodoInputs';
import Result from './components/Results/Results';
import TodoListData from './API/API'
import Navbar from './components//Navbar/Navbar'



function App() {

  const [todoItems, setTodoItems] = useState(TodoListData)
  const [selectedTodo, setSelectedTodo] = useState(null);

    
  const handleCreateTodo =(todo)=> setTodoItems([...todoItems, todo])
  

  const handleSelected = (todo) =>  setSelectedTodo(todo);
  
  const handleUpdate =(newTodo)=>{
    setTodoItems(
          todoItems.map(todo => todo.id === newTodo.id ? newTodo :todo)
    )
    setSelectedTodo(null)
  } 

  const handleDelete =(todoId)=>{
    setTodoItems(todoItems.filter(item =>item.id !== todoId))
  }

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <TodoInputs 
        handleCreateTodo={handleCreateTodo}
        handleUpdate={handleUpdate}
        selectedTodo={selectedTodo}
        key={selectedTodo ? selectedTodo.id : null}
        />
        <div className='card'>
          {
            todoItems.map(item =>(
              <Result
              key={item.id} 
              item={item}
              handleDelete={handleDelete}  
              handleSelected={handleSelected}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;

