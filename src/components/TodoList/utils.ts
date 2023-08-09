import { TodoItemStatus } from 'src/types';
import styles from './todoList.module.scss';

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
