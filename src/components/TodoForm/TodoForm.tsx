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
      <button onClick={addTodoItem}>Добавить задачу</button>
      <TodoList todoItems={todoItems} activeId={activeId} setActiveId={setActiveId} />
      {activeItem !== undefined && (
        <TodoEditor todoItem={activeItem} setTodoItem={setTodoItem.bind(null, activeId)} />
      )}
    </div>
  );
};
