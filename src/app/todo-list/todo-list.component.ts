import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/index';
import { Observable } from 'rxjs/Observable';
import { TASK_GET, TASK_REMOVE, TASK_ADD, TASK_SELECTED_REMOVE } from '../store/task/task.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  taskEntry: string;
  tasks$: Observable<{}>;
  selectedItems: any = [];
  constructor(private store: Store<IAppState>) {

    this.tasks$ = store.select('task');
    this.tasks$.subscribe(
      (res) => {
        if (!res) {
          store.dispatch({
            type: TASK_GET
          });
        }
      }
    );
  }

  ngOnInit() {
  }

  selectItem(event, id) {
    if (event.target.checked) {
      this.selectedItems.push(id);
    } else {
      const index = this.selectedItems.indexOf(id);
      this.selectedItems.splice(index, 1);
    }

  }

  addTask(formData) {
    this.taskEntry = '';
    this.store.dispatch({
      type: TASK_ADD,
      payload: formData
    });
  }

  removeTask(task) {
    this.store.dispatch({
      type: TASK_REMOVE,
      payload: task._id
    });
  }

  removeSelectedTask() {
    this.store.dispatch({
      type: TASK_SELECTED_REMOVE,
      payload: this.selectedItems
    });
  }

}
