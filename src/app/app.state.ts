import { ActionReducerMap } from '@ngrx/store';
import { validFilters } from './filters/filter.action';
import { filterReducer } from './filters/filter.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';

export interface AppState {
    todos: Todo[];
    filters: validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {

    todos: todoReducer,
    filters: filterReducer

};
