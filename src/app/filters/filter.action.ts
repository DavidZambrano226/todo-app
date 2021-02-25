import { createAction, props } from '@ngrx/store';

export type validFilters = 'all' | 'completes' | 'pendings';

export const setFilter = createAction('[Filter] Set filter', props<{ filter: validFilters}>());
