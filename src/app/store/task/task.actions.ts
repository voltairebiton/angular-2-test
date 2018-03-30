import { Action } from '@ngrx/store';
import { ITask } from './task.reducer';

export const TASK_GET = '[Task] get';
export const TASK_GET_SUCCESS = '[Task] get success';
export const TASK_GET_FAIL = '[Task] get fail';

export const TASK_ADD = '[Task] add new';
export const TASK_ADD_FAIL = '[Task] add new fail';
export const TASK_ADD_SUCCESS = '[Task] add new success';

export const TASK_REMOVE = '[Task] remove';
export const TASK_REMOVE_FAIL = '[Task] remove fail';
export const TASK_REMOVE_SUCCESS = '[Task] remove success';

export const TASK_SELECTED_REMOVE = '[Task] remove selected';
export const TASK_SELECTED_REMOVE_FAIL = '[Task] remove selected fail';
export const TASK_SELECTED_REMOVE_SUCCESS = '[Task] remove selected success';

export class TaskGet implements Action {
  readonly type = TASK_GET;

  constructor(public payload: string) {}
}

export class TaskGetSuccess implements Action {
  readonly type = TASK_GET_SUCCESS;

  constructor(public payload: ITask) {}
}

export class TaskGetFail implements Action {
  readonly type = TASK_GET_FAIL;

  constructor(public payload: string) {}
}

/* Task Add */
export class TaskAdd implements Action {
  readonly type = TASK_ADD;

  constructor(public payload: string) {}
}

export class TaskAddSuccess implements Action {
  readonly type = TASK_ADD_SUCCESS;

  constructor(public payload: ITask) {}
}

export class TaskAddFail implements Action {
  readonly type = TASK_ADD_FAIL;

  constructor(public payload: string) {}
}

/* Task Remove */
export class TaskRemove implements Action {
  readonly type = TASK_REMOVE;

  constructor(public payload: string) {}
}

export class TaskRemoveSuccess implements Action {
  readonly type = TASK_REMOVE_SUCCESS;

  constructor(public payload: ITask) {}
}

export class TaskRemoveFail implements Action {
  readonly type = TASK_REMOVE_FAIL;

  constructor(public payload: string) {}
}

/* Task Selected Remove */
export class TaskSelectedRemove implements Action {
  readonly type = TASK_SELECTED_REMOVE;

  constructor(public payload: string) {}
}

export class TaskSelectedRemoveSuccess implements Action {
  readonly type = TASK_SELECTED_REMOVE_SUCCESS;

  constructor(public payload: ITask) {}
}

export class TaskSelectedRemoveFail implements Action {
  readonly type = TASK_SELECTED_REMOVE_FAIL;

  constructor(public payload: string) {}
}

export type Actions =
  | TaskGet
  | TaskGetSuccess
  | TaskGetFail
  | TaskRemove
  | TaskRemoveSuccess
  | TaskRemoveFail
  | TaskAdd
  | TaskAddFail
  | TaskAddSuccess
  | TaskSelectedRemove
  | TaskSelectedRemoveFail
  | TaskSelectedRemoveSuccess;
