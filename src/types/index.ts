export interface TodoItem {
  title: string;
  status: 'waiting' | 'in process' | 'completed';
}

export type TodoItems = Record<number, TodoItem>;
