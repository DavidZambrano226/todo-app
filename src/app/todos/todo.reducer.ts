import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, toggle, edit, deleteAct } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Initial todo'),
  new Todo('Second todo'),
  new Todo('Third todo'),
];

/**
 * Important! You should avoid the objects mutation.
 * In this method the new Array returned was destructuring to generate a new Array with
 * the old values and the new value.
 */
const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)] ),
  
  on(deleteAct, (state, { id }) => state.filter( todo => todo.id !== id ) ),

  on(toggle, (state, { id }) => {
    return state.map( todo => {
      if (todo.id == id) {
        return {
          ...todo,
          complete: !todo.complete
        }
      } else {
        return todo;
      }
    })
  }),
  on(edit, (state, { id, text }) => {
    return state.map( todo => {
      if (todo.id == id) {
        return {
          ...todo,
          text: text
        }
      } else {
        return todo;
      }
    })
  }),
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}