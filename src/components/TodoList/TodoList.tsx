import React from 'react';
import styles from './todoList.module.scss';
import { TodoItems } from 'src/types';
import { getStringFromTodoItemStatus, getTodoItemStatusClassName } from './utils';

interface TodoListProps {
  todoItems: TodoItems;

  /** ID активной задачи. */
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}

/** Компонент для отображения списка дел. */
export const TodoList = (props: TodoListProps) => {
  const { todoItems, activeId, setActiveId } = props;

  return (
    <div className={styles.todoList}>
      {Array.from(todoItems).map(([id, todoItem]) => (
        <div
          className={activeId === id ? styles.activeTodoItem : styles.todoItem}
          key={id}
          onClick={() => setActiveId(id)}
        >
          <p className={styles.title}>{todoItem.title}</p>
          <p className={getTodoItemStatusClassName(todoItem.status)}>
            {getStringFromTodoItemStatus(todoItem.status)}
          </p>
        </div>
      ))}
    </div>
  );
};
