import { ADD, DELETE } from "../actionTypes";

const initialState = [];

export default function(state = initialState, action) {
  // console.log("inside reducer", state);
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    case DELETE:
      return state.filter((element, index) => action.id !== index);
    default:
      return state;
  }
}
