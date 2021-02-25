import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
// import { create, toggle, edit, deleteAct, todoAll } from './todo.actions';
import * as actions from './todo.actions';


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
  on(actions.create, (state, { text }) => [...state, new Todo(text)] ),

  on(actions.deleteAct, (state, { id }) => state.filter( todo => todo.id !== id ) ),

  on(actions.todoAll, (state, { complete }) => state.map( todo => {
    return {
      ...todo,
      complete
    };
  }) ),

  on(actions.toggle, (state, { id }) => {
    return state.map( todo => {
      if (todo.id == id) {
        return {
          ...todo,
          complete: !todo.complete
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.edit, (state, { id, text }) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        };
      } else {
        return todo;
      }
    });
  }),
);
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
