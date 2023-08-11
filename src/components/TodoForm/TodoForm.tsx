import React, { useState } from 'react';
import styles from './todoForm.module.scss';
import { TodoList, TodoEditor } from '..';
import { useCacheableTodoState, useResizer } from 'src/hooks';

export const TodoForm = () => {
  const { todoItems, setTodoItem, addTodoItem } = useCacheableTodoState();
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeItem = activeId !== null ? todoItems.get(activeId) : undefined;

  const { resizerRef, resizableRef } = useResizer();

  return (
    <div className={styles.todoForm}>
      <div className={styles.topPanel}>
        <button onClick={addTodoItem} className={styles.addTodoItem}>
          Добавить задачу
        </button>
      </div>
      <div className={styles.content}>
        <span className={styles.todoList} ref={resizableRef}>
          <TodoList todoItems={todoItems} activeId={activeId} setActiveId={setActiveId} />
        </span>
        <span className={styles.resizer} ref={resizerRef} />
        {activeItem !== undefined && (
          <span className={styles.todoEditor}>
            <TodoEditor
              todoItem={activeItem}
              setTodoItem={(todoItem) => setTodoItem(activeId, todoItem)}
            />
          </span>
        )}
      </div>
    </div>
  );
};
