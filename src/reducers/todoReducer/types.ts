import { TodoItem } from 'src/types';

export enum TodoActions {
  SET_TODO = 'SET_TODO',
  ADD_TODO = 'ADD_TODO',
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

export type TodoAction = SetTodo | AddTodo;
