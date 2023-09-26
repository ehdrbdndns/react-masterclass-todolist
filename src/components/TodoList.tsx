import { useRecoilValue } from 'recoil';
import { toDoState } from '../atoms';
import ToDo from './Todo';
import CreateToDo from './CreateToDo';

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>내가 가고 싶은 나라들</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map(
          (toDo) => toDo.category === 'WANT' && <ToDo key={toDo.id} {...toDo} />
        )}
      </ul>
      <h1>내가 가본 나라들</h1>
      <ul>
        {toDos.map(
          (toDo) => toDo.category === 'WENT' && <ToDo key={toDo.id} {...toDo} />
        )}
      </ul>
      <h1>내가 좋아하는 나라들</h1>
      <ul>
        {toDos.map(
          (toDo) => toDo.category === 'LIKE' && <ToDo key={toDo.id} {...toDo} />
        )}
      </ul>
    </div>
  );
}

export default ToDoList;
