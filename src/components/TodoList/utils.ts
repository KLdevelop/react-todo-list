import { TodoItemStatus } from 'src/types';
import styles from './todoList.module.scss';

/**
 * @param status текущий статус задачи.
 * @returns имя класса CSS для текущего статуса задачи.
 */
export const getTodoItemStatusClassName = (status: TodoItemStatus) => {
  switch (status) {
    case 'waiting':
      return styles.waitingStatus;
    case 'in process':
      return styles.inProcessStatus;
    case 'completed':
      return styles.completedStatus;
  }
};

/**
 * @param status статус задачи.
 * @returns строка на русском языке, соответствующая статусу задачи.
 */
export const getStringFromTodoItemStatus = (status: TodoItemStatus) => {
  switch (status) {
    case 'waiting':
      return 'Ожидает';
    case 'in process':
      return 'В процессе';
    case 'completed':
      return 'Завершена';
  }
};
