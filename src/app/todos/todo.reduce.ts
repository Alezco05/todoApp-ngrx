import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todos.actions';

const initialState: Todo[] = [
  new Todo('1'),
  new Todo('2'),
  new Todo('3'),
  new Todo('4'),
  new Todo('5'),
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)])
);
