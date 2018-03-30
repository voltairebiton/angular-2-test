import { Actions, TASK_GET_SUCCESS, TASK_REMOVE_SUCCESS, TASK_ADD_SUCCESS, TASK_SELECTED_REMOVE_SUCCESS } from './task.actions';

export interface ITask {
  _id: string;
  task: string;
  selected: boolean;
}

export function taskReducer(state: ITask[], action: Actions): ITask[] {
  switch (action.type) {

    case TASK_GET_SUCCESS:
      return Object.assign([], action.payload);
    case TASK_ADD_SUCCESS:
      return [...state, Object.assign({}, action.payload)];
    case TASK_REMOVE_SUCCESS:
      return state.filter((taskToRemove: ITask) => action.payload._id !== taskToRemove._id);
    case TASK_SELECTED_REMOVE_SUCCESS:
      return state.filter((taskToRemove: ITask) => action.payload._id.indexOf(taskToRemove._id) === -1 );
    default:
      return state;
  }
}
