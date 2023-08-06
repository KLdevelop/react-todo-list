import React, { useState } from 'react';
import styles from './todoForm.module.scss';
import { TodoList, TodoEditor } from '..';
import { TodoItem, TodoItems } from 'src/types';
import { TodoActions, TodoAction } from 'src/reducers';

interface TodoFormProps {
  todoItems: TodoItems;
  dispatchTodo: React.Dispatch<TodoAction>;
}

export const TodoForm = (props: TodoFormProps) => {
  const { todoItems, dispatchTodo } = props;
  const [activeId, setActiveId] = useState(null as number | null);

  const setTodoItem = (todoItem: TodoItem) => {
    if (activeId === null) return;

    dispatchTodo({
      type: TodoActions.SET_TODO,
      payload: {
        id: activeId,
        todoItem: todoItem,
      },
    });
  };

  const addTodoItem = () => {
    dispatchTodo({
      type: TodoActions.ADD_TODO,
      payload: {
        title: 'Новая задача',
        status: 'waiting',
      },
    });
  };

  return (
    <div className={styles.todoForm}>
      <button onClick={addTodoItem}>Добавить задачу</button>
      <TodoList todoItems={todoItems} activeId={activeId} setActiveId={setActiveId} />
      {activeId !== null && <TodoEditor todoItem={todoItems[activeId]} setTodoItem={setTodoItem} />}
    </div>
  );
};
