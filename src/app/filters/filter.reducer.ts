import { createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filter.action';


export const initialState: validFilters = 'all';

const _filterReducer = createReducer(initialState,

    on( setFilter, ( state, { filter } ) => filter ),

);


export function filterReducer(state, action) {
    return _filterReducer(state, action);
  }