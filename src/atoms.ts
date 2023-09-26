import { atom } from 'recoil';

export interface IToDo {
  text: string;
  id: number;
  category: 'WANT' | 'WENT' | 'LIKE';
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});
