import { TodoItems } from 'src/types';

export const filterTodoList = (todoList: TodoItems, title: string): TodoItems => {
  const todoArray = Array.from(todoList);
  const formattedTitle = title.toLowerCase();
  const filteredTodoArray = todoArray.filter(([_, todoItem]) =>
    todoItem.title.toLowerCase().includes(formattedTitle),
  );

  return new Map(filteredTodoArray);
};
