import * as types from '../../types';

export function changeTuning(name) {
  return {
    type: types.FRETBOARD_CHANGE_TUNING,
    payload: name
  };
}

export function calculateFretboardNotes() {
  return {
    type: types.FRETBOARD_CALCULATE_NOTES
  };
}

export function toggleAudio() {
  return {
    type: types.FRETBOARD_TOGGLE_AUDIO
  };
}

export function deleteSelected(string_index, fret_index) {
  return {
    type: types.FRETBOARD_DELETE_SELECTED,
    payload: {
      string_index: string_index,
      fret_index: fret_index
    }
  };
}

export function addSelected(string_index, fret_index) {
  return {
    type: types.FRETBOARD_ADD_SELECTED,
    payload: {
      string_index: string_index,
      fret_index: fret_index
    }
  };
}

export function deleteAllSelected() {
  return {
    type: types.FRETBOARD_DELETE_ALL_SELECTED
  };
}
