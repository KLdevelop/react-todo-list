import React from 'react';
import styles from './todoList.module.scss';
import { TodoItem, TodoItems } from 'src/types';

interface TodoListProps {
  todoItems: TodoItems;
  activeId?: number;
  setActiveId?: () => void;
}

export const TodoList = (props: TodoListProps) => {
  const todoItems = Object.entries<TodoItem>(props.todoItems);

  return (
    <div className={styles.todoList}>
      {todoItems.map(([id, todoItem]) => (
        <div key={id}>
          <p>{todoItem.title}</p>
          <p>{todoItem.status}</p>
        </div>
      ))}
    </div>
  );
};
