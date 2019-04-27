import { ADD, DELETE } from "./actionTypes";

let nextMessageId = 0;

export const addMessage = message => {
  return {
    type: ADD,
    payload: {
      id: ++nextMessageId,
      message
    }
  };
};

export const deleteMessage = id => {
  return {
    type: DELETE,
    payload: {
      id
    }
  };
};
