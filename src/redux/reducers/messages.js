import { ADD, DELETE } from "../actionTypes";

// const initialState = [];
const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  // console.log("inside reducer", state);
  switch (action.type) {
    case ADD: {
      const { id, message } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            message
          }
        }
      };
    }
    case DELETE: {
      const { id } = action.payload;
      const { allIds, byIds } = state;
      const newAllIds = allIds.filter(element => id !== element);
      const { [id]: removedValue, ...childWithout } = byIds;
      return { allIds: newAllIds, byIds: childWithout };
    }
    default:
      return state;
  }
}

//      return state.filter((element, index) => action.id !== index);
// const parentKey = 'c';
// const childKey = 'y';
// Remove the 'c' element from original
// const { [parentKey]: parentValue, ...noChild } = deep;
// Remove the 'y' from the 'c' element
// const { [childKey]: removedValue, ...childWithout } = parentValue;
// Merge back together
// const withoutThird = { ...noChild, [parentKey]: childWithout };
// console.log(withoutThird); // Will be { "foo": "bar", "c": { "x": 1 } }
