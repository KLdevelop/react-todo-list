import React from 'react';
import styles from './todoEditor.module.scss';
import { TodoItem, TodoItemStatus } from 'src/types';

interface TodoEditorProps {
  todoItem: TodoItem;
  setTodoItem: (todoItem: TodoItem) => void;
}

export const TodoEditor = (props: TodoEditorProps) => {
  const { todoItem, setTodoItem } = props;

  const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoItem({ ...todoItem, title: e.target.value });
  };

  const onStatusChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
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
        <select value={todoItem.status} onChange={onStatusChange}>
          <option value={'waiting' as TodoItemStatus}>Ожидает</option>
          <option value={'in process' as TodoItemStatus}>В процессе</option>
          <option value={'completed' as TodoItemStatus}>Завершена</option>
        </select>
      </fieldset>
    </div>
  );
};
