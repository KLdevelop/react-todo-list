import React, { useState } from 'react';
import styles from './todoForm.module.scss';
import { TodoList, TodoEditor } from '..';
import { useCacheableTodoState, useResizer } from 'src/hooks';
import { filterTodoList } from 'src/utils';

export const TodoForm = () => {
  const { todoItems, setTodoItem, addTodoItem, deleteTodoItem } = useCacheableTodoState();
  const [filterString, setFilterString] = useState('');
  const filteredTodoItems = filterTodoList(todoItems, filterString);

  const [activeId, setActiveId] = useState<number | null>(null);
  const activeItem = activeId !== null ? todoItems.get(activeId) : undefined;

  const { resizerRef, resizableRef } = useResizer();

  return (
    <div className={styles.todoForm}>
      <div className={styles.topPanel}>
        <button onClick={addTodoItem} className={styles.addTodoItem}>
          Добавить задачу
        </button>
        <input
          className={styles.search}
          type="text"
          value={filterString}
          onChange={(e) => setFilterString(e.target.value)}
          placeholder="Поиск задачи"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.todoList} ref={resizableRef}>
          <TodoList todoItems={filteredTodoItems} activeId={activeId} setActiveId={setActiveId} />
        </span>
        <span className={styles.resizer} ref={resizerRef} />
        {activeId !== null && activeItem !== undefined && (
          <span className={styles.todoEditor}>
            <TodoEditor
              todoItem={activeItem}
              setTodoItem={(todoItem) => setTodoItem(activeId, todoItem)}
              deleteTodoItem={() => deleteTodoItem(activeId)}
            />
          </span>
        )}
      </div>
    </div>
  );
};
