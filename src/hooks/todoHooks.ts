import { useEffect, useReducer, useRef } from 'react';
import { TodoActions, todoReducer } from 'src/reducers';
import { TodoItem } from 'src/types';
import { getTodoList, saveTodoList } from 'src/utils';

export const useCacheableTodoState = () => {
  const todoList = useRef(getTodoList());
  const [todoItems, dispatch] = useReducer(todoReducer, todoList.current);

  useEffect(() => {
    saveTodoList(todoItems);
  }, [todoItems]);

  const setTodoItem = (id: number | null, todoItem: TodoItem) => {
    if (id === null) return;

    dispatch({
      type: TodoActions.SET_TODO,
      payload: {
        id: id,
        todoItem: todoItem,
      },
    });
  };

  const addTodoItem = () => {
    dispatch({
      type: TodoActions.ADD_TODO,
      payload: {
        title: 'Новая задача',
        status: 'waiting',
      },
    });
  };

  return { todoItems, setTodoItem, addTodoItem };
};
