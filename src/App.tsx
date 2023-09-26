import React, { useEffect } from 'react';
import ToDoList from './components/TodoList';
import { useSetRecoilState } from 'recoil';
import { toDoState } from './atoms';

function App() {
  const setToDos = useSetRecoilState(toDoState);
  useEffect(() => {
    let json = localStorage.getItem('todos');
    if (json !== null) {
      setToDos(JSON.parse(json));
    }
  });

  return <ToDoList />;
}

export default App;
