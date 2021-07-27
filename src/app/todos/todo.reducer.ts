import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {
  borrar,
  crear,
  editar,
  limpiar,
  toggle,
  toggleAll,
} from './todos.actions';

const initialState: Todo[] = [
  new Todo('1'),
  new Todo('2'),
  new Todo('3'),
  new Todo('4'),
  new Todo('5'),
];

export const todoReducer = createReducer(
  initialState,
  on(limpiar, (state) => state.filter((todo) => !todo.completado)),
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado,
      };
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  })
);
