import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TASK_GET, TaskGet, TaskGetFail, TaskGetSuccess } from './task.actions';

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

  constructor(private actions$: Actions, private http: HttpClient) {}
}
