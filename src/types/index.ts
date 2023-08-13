/** Статус задачи из списка дел. */
export type TodoItemStatus = 'waiting' | 'in process' | 'completed';

/** Задача из списка дел. */
export interface TodoItem {
  title: string;
  status: TodoItemStatus;
}

/** Список дел. */
export type TodoItems = Map<number, TodoItem>;
