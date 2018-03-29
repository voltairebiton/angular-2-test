import { Actions, TASK_GET_SUCCESS, TASK_REMOVE_SUCCESS, TASK_ADD_SUCCESS } from './task.actions';

export interface ITask {
  _id: string;
  task: string;
}

export function taskReducer(state: ITask[], action: Actions): ITask[] {
  console.log(action);
  switch (action.type) {

    case TASK_GET_SUCCESS:
      return Object.assign([], action.payload);
    case TASK_ADD_SUCCESS:
      return [...state, Object.assign({}, action.payload)];
    case TASK_REMOVE_SUCCESS:
      console.log(action);
      console.log(state);
      return state.filter((taskToRemove: ITask) => action.payload._id !== taskToRemove._id);
    default:
      return state;
  }
}
