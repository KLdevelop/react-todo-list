import { useEffect, useMemo, useReducer } from 'react';
import { TodoActions, todoReducer } from 'src/reducers';
import { TodoItem } from 'src/types';
import { getTodoList, saveTodoList } from 'src/utils';

/**
 * Возвращает состояние со списком дел, загружаемого из localstorage, и функции для его изменения:
 * изменение задачи, добавление новой задачи, удаление задачи.
 *
 * Все изменения списка дел сохраняются в localstorage.
 */
export const useCacheableTodoState = () => {
  /** Список дел загружается из localstorage лишь 1 раз: при монтировании компонента */
  const todoList = useMemo(() => getTodoList(), []);
  const [todoItems, dispatch] = useReducer(todoReducer, todoList);

  useEffect(() => {
    saveTodoList(todoItems);
  }, [todoItems]);

  /**
   * Обновляет информацию о задаче.
   *
   * @param id id обновляемой задачи.
   * @param todoItem новые данные задачи.
   */
  const setTodoItem = (id: number, todoItem: TodoItem) => {
    dispatch({
      type: TodoActions.SET_TODO,
      payload: {
        id: id,
        todoItem: todoItem,
      },
    });
  };

  /** Добавляет в список дел новую задачу. */
  const addTodoItem = () => {
    dispatch({
      type: TodoActions.ADD_TODO,
      payload: {
        title: 'Новая задача',
        status: 'waiting',
      },
    });
  };

  /**
   * Удаляет задачу из списка дел.
   *
   * @param id id удаляемой задачи
   */
  const deleteTodoItem = (id: number) => {
    dispatch({
      type: TodoActions.DELETE_TODO,
      payload: id,
    });
  };

  return { todoItems, setTodoItem, addTodoItem, deleteTodoItem };
};
