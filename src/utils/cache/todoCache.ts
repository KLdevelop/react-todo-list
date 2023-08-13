import { TodoItem, TodoItems } from 'src/types';

const storage = localStorage;
const TODO_LIST = 'TODO_LIST';

/** Получение сохраненого в localstorage списка дел. */
export const getTodoList = (): TodoItems => {
  const todoListJson = storage.getItem(TODO_LIST);

  const todoListObject: Record<string, TodoItem> =
    todoListJson !== null ? JSON.parse(todoListJson) : {};

  const todoListEntries = Object.entries(todoListObject);

  const todoList: TodoItems = new Map(
    todoListEntries.map(([id, todoItem]) => [Number(id), todoItem]),
  );

  return todoList;
};

/**
 * Сохранение списка дел в localstorage.
 *
 * @param todoList сохраняемый список задач.
 */
export const saveTodoList = (todoList: TodoItems) => {
  const todoListObject = Object.fromEntries(todoList.entries());

  storage.setItem(TODO_LIST, JSON.stringify(todoListObject));
};
