import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Create Todo',
    props< {text: string} >()
);
export const toggle = createAction(
    '[TODO] Toggle Todo',
    props< {id: number} >()
);
export const edit = createAction(
    '[TODO] Edit Todo',
    props< {id: number, text: string} >()
);
export const deleteAct = createAction(
    '[TODO] Delete Todo',
    props< {id: number} >()
);
export const todoAll = createAction(
    '[TODO] Check All Todo',
    props< {complete: boolean} >()
);
export const clearComplete = createAction(
    '[TODO] Clear All Complete Todo'
);
