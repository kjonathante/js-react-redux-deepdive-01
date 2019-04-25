import { ADD } from "./actionTypes";

export const addMessage = message => {
  return {
    type: ADD,
    message: message
  };
};
