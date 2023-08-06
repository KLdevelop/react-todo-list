import React, { useEffect, useState } from 'react';
import styles from './todoEditor.module.scss';
import { TodoItem, TodoItemStatus } from 'src/types';

interface TodoEditorProps {
  todoItem: TodoItem;
  setTodoItem: (todoItem: TodoItem) => void;
}

export const TodoEditor = (props: TodoEditorProps) => {
  const { todoItem, setTodoItem } = props;
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('waiting' as TodoItemStatus);
  const changed = title !== todoItem.title || status !== todoItem.status;

  useEffect(() => {
    setTitle(todoItem.title);
    setStatus(todoItem.status);
  }, [todoItem]);

  const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const onStatusChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setStatus(e.target.value as TodoItemStatus);
  };

  const onSaveClick = () => {
    setTodoItem({ title, status });
  };

  return (
    <div className={styles.todoEditor}>
      <fieldset className={styles.titleField}>
        <legend>Название задачи</legend>
        <div className={styles.titleInputForm}>
          <input type="text" className={styles.titleInput} value={title} onChange={onTitleChange} />
        </div>
      </fieldset>
      <fieldset className={styles.statusField}>
        <legend>Статус задачи</legend>
        <select value={status} onChange={onStatusChange}>
          <option value={'waiting' as TodoItemStatus}>Ожидает</option>
          <option value={'in process' as TodoItemStatus}>В процессе</option>
          <option value={'completed' as TodoItemStatus}>Завершена</option>
        </select>
      </fieldset>
      {changed && <button onClick={onSaveClick}>Сохранить изменения</button>}
    </div>
  );
};
