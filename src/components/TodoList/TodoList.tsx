import React from 'react';
import styles from './todoList.module.scss';
import { TodoItem, TodoItems } from 'src/types';

interface TodoListProps {
  todoItems: TodoItems;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}

export const TodoList = (props: TodoListProps) => {
  const todoItems = Object.entries<TodoItem>(props.todoItems);
  const { activeId, setActiveId } = props;

  return (
    <div className={styles.todoList}>
      {todoItems.map(([id, todoItem]) => (
        <div
          className={activeId === +id ? styles.activeTodoItem : styles.todoItem}
          key={id}
          onClick={() => setActiveId(Number(id))}
        >
          <p>{todoItem.title}</p>
          <p>{todoItem.status}</p>
        </div>
      ))}
    </div>
  );
};
