import { TodoItems } from 'src/types';

/**
 * Возвращает список задач, названия которых содержат строку поиска.
 *
 * Регистр строки поиска не учитывается.
 *
 * @param todoItems список дел.
 * @param searchString строка поиска.
 * @returns отфильтрованный список дел.
 */
export const filterTodoList = (todoItems: TodoItems, searchString: string): TodoItems => {
  const todoArray = Array.from(todoItems);
  const formattedSearchString = searchString.toLowerCase();
  const filteredTodoArray = todoArray.filter(([_, todoItem]) =>
    todoItem.title.toLowerCase().includes(formattedSearchString),
  );

  return new Map(filteredTodoArray);
};
