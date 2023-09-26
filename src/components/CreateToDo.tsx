import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';
import styled from 'styled-components';

const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => {
      const newToDos = [
        { text: toDo, id: Date.now(), category: 'WANT' },
        ...oldToDos,
      ];
      localStorage.setItem('todos', JSON.stringify(newToDos));
      return [{ text: toDo, id: Date.now(), category: 'WANT' }, ...oldToDos];
    });
    setValue('toDo', '');
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('toDo', {
          required: 'Please write a To Do',
        })}
        placeholder="Write a to do"
      />
      <button>가자!</button>
    </Form>
  );
}

export default CreateToDo;
