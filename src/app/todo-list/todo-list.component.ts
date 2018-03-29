import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/index';
import { Observable } from 'rxjs/Observable';
import { TASK_GET } from '../store/task/task.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  taskEntry: string;
  tasks$: Observable<{}>;

  constructor(store: Store<IAppState>) {

    this.tasks$ = store.select('task');
    this.tasks$.subscribe(
      (res) => {
        console.log(res);
        if (!res) {
          // console.log(res);
          store.dispatch({
            type: TASK_GET
          });
        }
      }
    );
  }

  ngOnInit() {
  }

  createTask(formData) {
    console.log(formData);
  }

}
