import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onChangeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      const newToDos = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];

      localStorage.setItem('todos', JSON.stringify(newToDos));
      return newToDos;
    });
  };

  const deleteTodo = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDos = [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem('todos', JSON.stringify(newToDos));
      return newToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category === 'WANT' && (
        <>
          <button name="WENT" onClick={onChangeCategory}>
            UP
          </button>
          <button onClick={deleteTodo}>DELETE</button>
        </>
      )}
      {category === 'WENT' && (
        <>
          <button name="LIKE" onClick={onChangeCategory}>
            UP
          </button>
          <button name="WANT" onClick={onChangeCategory}>
            DELETE
          </button>
        </>
      )}
      {category === 'LIKE' && (
        <>
          <button name="WENT" onClick={onChangeCategory}>
            DELETE
          </button>
        </>
      )}
    </li>
  );
}

export default ToDo;
