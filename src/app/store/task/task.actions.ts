import { Action } from '@ngrx/store';
import { ITask } from './task.reducer';

export const TASK_GET = '[Task] get';
export const TASK_GET_SUCCESS = '[Task] get success';
export const TASK_GET_FAIL = '[Task] get fail';

export const TASK_REMOVE = '[Task] remove';
export const TASK_REMOVE_FAIL = '[Task] remove fail';
export const TASK_REMOVE_SUCCESS = '[Task] remove success';

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

/* Feed Remove */
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

export type Actions =
  | TaskGet
  | TaskGetSuccess
  | TaskGetFail
  | TaskRemove
  | TaskRemoveSuccess
  | TaskRemoveFail;
