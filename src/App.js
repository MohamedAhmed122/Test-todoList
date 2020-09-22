import React, { useState } from 'react';

import './App.css';
import TodoInputs from './components/TodoInput/TodoInputs';
import Result from './components/Results/Results';
import TodoListData from './components/API/API'
function App() {

  const [todoItems, setTodoItems] = useState(TodoListData)

  const handleCreateTodo =(todo)=>{
    setTodoItems([...todoItems, todo])
  }
  return (
    <div className="App">
      <TodoInputs handleCreateTodo={handleCreateTodo}/>
      <div>
        {
          todoItems.map(item =>(
            <Result  key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default App;

