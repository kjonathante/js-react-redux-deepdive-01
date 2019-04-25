import { ADD } from "../actionTypes";

const initialState = [];

export default function(state = initialState, action) {
  // console.log("inside reducer", state);
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
}
