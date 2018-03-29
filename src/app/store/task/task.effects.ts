import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TASK_GET, TaskGet, TaskGetFail, TaskGetSuccess, TASK_REMOVE,
  TaskRemove, TaskRemoveSuccess, TaskRemoveFail, TaskAdd, TaskAddFail, TaskAddSuccess,
  TASK_ADD } from './task.actions';
import { ITask } from './task.reducer';
@Injectable()
export class TaskEffects {

  @Effect()
  taskGet$ = this.actions$
    .ofType(TASK_GET)
    .switchMap((action: TaskGet) => {
      return this.http.get<any>('/api/task')
        .catch((error) => Observable.of(new TaskGetFail(error)))
        .map((response: any) => new TaskGetSuccess(response));
    });

  @Effect()
  addTask$ = this.actions$
    .ofType(TASK_ADD)
    .switchMap((action: TaskAdd) => {

      return this.http.post<ITask>('/api/task', action.payload)
        .catch((error) => Observable.of(new TaskAddFail(error)))
        .map((response: ITask) => new TaskAddSuccess(response));
    });

  @Effect()
  removeTask$ = this.actions$
    .ofType(TASK_REMOVE)
    .switchMap((action: TaskRemove) => {

      return this.http.delete<ITask>(`/api/task/${action.payload}`)
        .catch((error) => Observable.of(new TaskRemoveFail(error)))
        .map((response: ITask) => new TaskRemoveSuccess(response));

    });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
