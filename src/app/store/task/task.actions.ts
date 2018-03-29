import { Action } from '@ngrx/store';
import { ITask } from './task.reducer';

export const TASK_GET = '[Task] get';
export const TASK_GET_SUCCESS = '[Task] get success';
export const TASK_GET_FAIL = '[Task] get fail';

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

export type Actions =
  | TaskGet
  | TaskGetSuccess
  | TaskGetFail;
