import { Reducer } from 'react';
import { TodoItems } from 'src/types';
import { TodoAction, TodoActions } from './types';

export const todoReducer: Reducer<TodoItems, TodoAction> = (state, action) => {
  switch (action.type) {
    case TodoActions.SET_TODO: {
      return { ...state, [action.payload.id]: action.payload.todoItem };
    }
    case TodoActions.ADD_TODO: {
      const ids = Object.keys(state);
      const idCount = ids.length;
      const newID = idCount > 0 ? Number(ids[idCount - 1]) + 1 : 0;

      return { ...state, [newID]: action.payload };
    }
    default: {
      return state;
    }
  }
};
