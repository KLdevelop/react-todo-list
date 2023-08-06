import React from 'react';
import styles from './todoList.module.scss';
import { TodoItems } from 'src/types';

interface TodoListProps {
  todoItems: TodoItems;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}

export const TodoList = (props: TodoListProps) => {
  const { activeId, setActiveId, todoItems } = props;

  return (
    <div className={styles.todoList}>
      {Array.from(todoItems).map(([id, todoItem]) => (
        <div
          className={activeId === id ? styles.activeTodoItem : styles.todoItem}
          key={id}
          onClick={() => setActiveId(id)}
        >
          <p>{todoItem.title}</p>
          <p>{todoItem.status}</p>
        </div>
      ))}
    </div>
  );
};
