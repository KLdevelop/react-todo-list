import { Reducer } from 'react';
import { TodoItems } from 'src/types';
import { TodoAction, TodoActions } from './types';

export const todoReducer: Reducer<TodoItems, TodoAction> = (state, action) => {
  switch (action.type) {
    case TodoActions.SET_TODO: {
      const newState = new Map(state);

      newState.set(action.payload.id, action.payload.todoItem);

      return newState;
    }

    case TodoActions.ADD_TODO: {
      const ids = Array.from(state.keys());
      const idCount = ids.length;
      const newID = idCount > 0 ? Number(ids[idCount - 1]) + 1 : 0;
      console.log(newID);

      const newState = new Map(state);

      newState.set(newID, action.payload);

      return newState;
    }

    default: {
      return state;
    }
  }
};
