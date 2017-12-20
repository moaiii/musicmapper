import * as types from '../../types';

export function clearSelection() {
  return {
    type: types.KEYBOARD_CLEAR_SELECTION,
    payload: {}
  }
}

export function highlightSelection(notes) {
  return {
    type: types.KEYBOARD_HIGHLIGHT_SELECTION,
    payload: notes
  }
}

export function toggleLaptopKeyboardKeys(bool) {
  return {
    type: types.KEYBOARD_TOGGLE_LAPTOP_KEYBOARD,
    payload: bool
  }
}
