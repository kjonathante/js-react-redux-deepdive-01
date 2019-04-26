import { ADD, DELETE } from "./actionTypes";

export const addMessage = message => {
  return {
    type: ADD,
    message: message
  };
};

export const deleteMessage = id => {
  return {
    type: DELETE,
    id: id
  };
};
