import { TodoItem } from 'src/types';

export enum TodoActions {
  /** Action изменения задачи в списке дел. */
  SET_TODO = 'SET_TODO',

  /** Action добавления новой задачи в список дел. */
  ADD_TODO = 'ADD_TODO',

  /** Action удаления задачи из списка дел. */
  DELETE_TODO = 'DELETE_TODO',
}

export interface SetTodo {
  type: TodoActions.SET_TODO;
  payload: {
    id: number;
    todoItem: TodoItem;
  };
}

export interface AddTodo {
  type: TodoActions.ADD_TODO;
  payload: TodoItem;
}

export interface DeleteTodo {
  type: TodoActions.DELETE_TODO;
  payload: number;
}

export type TodoAction = SetTodo | AddTodo | DeleteTodo;
