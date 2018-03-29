import { Route } from '@angular/router';
import { TodoListComponent } from './todo-list.component';

export const routes: Route[] = [
  {
    path: '',
    component: TodoListComponent
  }
];
