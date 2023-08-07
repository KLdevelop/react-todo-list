import React, { useState } from 'react';
import styles from './todoForm.module.scss';
import { TodoList, TodoEditor } from '..';
import { useCacheableTodoState } from 'src/hooks';

export const TodoForm = () => {
  const { todoItems, setTodoItem, addTodoItem } = useCacheableTodoState();
  const [activeId, setActiveId] = useState(null as number | null);
  const activeItem = activeId !== null ? todoItems.get(activeId) : undefined;

  return (
    <div className={styles.todoForm}>
      <div className={styles.topPanel}>
        <button onClick={addTodoItem} className={styles.addTodoItem}>
          Добавить задачу
        </button>
      </div>
      <div className={styles.content}>
        <span className={styles.todoList}>
          <TodoList todoItems={todoItems} activeId={activeId} setActiveId={setActiveId} />
        </span>
        <span className={styles.todoEditor}>
          {activeItem !== undefined && (
            <TodoEditor todoItem={activeItem} setTodoItem={setTodoItem.bind(null, activeId)} />
          )}
        </span>
      </div>
    </div>
  );
};
