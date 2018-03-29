import { Actions, TASK_GET_SUCCESS } from './task.actions';

export interface ITask {
  id: string;
  task: string;
}

export function taskReducer(state: ITask, action: Actions): ITask {
  console.log(action);
  switch (action.type) {

    case TASK_GET_SUCCESS:

      return Object.assign([], action.payload);

    default:
      return state;
  }
}
