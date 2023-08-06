export type TodoItemStatus = 'waiting' | 'in process' | 'completed';

export interface TodoItem {
  title: string;
  status: TodoItemStatus;
}

export type TodoItems = Map<number, TodoItem>;
