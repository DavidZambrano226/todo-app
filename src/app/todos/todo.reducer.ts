import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create } from './todo.actions';

export const initialState: Todo[] = [];

/**
 * Important! You should avoid the mutation objects
 * In this method the new Array returned was destructuring to generate a new Array with
 * the old values and the new value.
 */
const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)] ),
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}