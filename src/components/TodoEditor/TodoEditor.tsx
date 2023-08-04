import React from 'react';
import styles from './todoEditor.module.scss';
import { TodoItem, TodoItemStatus } from 'src/types';

interface TodoEditorProps {
  todoItem: TodoItem;
  setTodoItem: React.Dispatch<React.SetStateAction<TodoItem>>;
}

export const TodoEditor = (props: TodoEditorProps) => {
  const { todoItem, setTodoItem } = props;

  const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoItem({ ...todoItem, title: e.target.value });
  };

  const onStatusChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoItem({ ...todoItem, status: e.target.value as TodoItemStatus });
  };

  return (
    <div className={styles.todoEditor}>
      <fieldset className={styles.titleField}>
        <legend>Название задачи</legend>
        <div className={styles.titleInputForm}>
          <input
            type="text"
            className={styles.titleInput}
            value={todoItem.title}
            onChange={onTitleChange}
          />
        </div>
      </fieldset>
      <fieldset className={styles.statusField}>
        <legend>Статус задачи</legend>
        <div>
          <input
            id={styles.waitingStatus}
            type="radio"
            value={'waiting' as TodoItemStatus}
            onChange={onStatusChange}
            checked={todoItem.status === 'waiting'}
          />
          <label htmlFor={styles.waitingStatus}>Ожидает</label>

          <input
            id={styles.inProcessStatus}
            type="radio"
            value={'in process' as TodoItemStatus}
            onChange={onStatusChange}
            checked={todoItem.status === 'in process'}
          />
          <label htmlFor={styles.inProcessStatus}>В процессе</label>

          <input
            id={styles.completedStatus}
            type="radio"
            value={'completed' as TodoItemStatus}
            onChange={onStatusChange}
            checked={todoItem.status === 'completed'}
          />
          <label htmlFor={styles.completedStatus}>Выполнена</label>
        </div>
      </fieldset>
    </div>
  );
};
