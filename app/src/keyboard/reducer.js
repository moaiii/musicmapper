import * as types from '../../types';

const initalState = {
  highlightedNotes: [],
  differenceNotes: [],
  showLaptopKeys: false
};

const keyboardReducer = (state = initalState, action) => {
  switch (action.type) {

  case types.KEYBOARD_CLEAR_SELECTION:
    return {
      highlightedNotes: [],
      differenceNotes: []
    };


  case types.KEYBOARD_HIGHLIGHT_SELECTION:
    return Object.assign({}, state, {
      highlightedNotes: action.payload.notes,
      differenceNotes: action.payload.difference
    });


  case types.KEYBOARD_TOGGLE_LAPTOP_KEYBOARD:
    return Object.assign({}, state, {
      showLaptopKeys: action.payload
    });


  default:
    return state;
  }
};

export default keyboardReducer;
