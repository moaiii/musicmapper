import * as types from '../../types';

export function addNote(note) {
  return {
    type: types.CHORDBANK_ADD_NOTE,
    payload: note
  };
}

export function deleteNote(note) {
  return {
    type: types.CHORDBANK_DELETE_NOTE,
    payload: note
  };
}

export function populateChordPossibilities() {
  return {
    type: types.CHORDBANK_POPULATE_POSSIBLE_CHORDS,
    payload: []
  };
}

export function populateAllScales() {
  return {
    type: types.CHORDBANK_POPULATE_POSSIBLE_SCALES,
    payload: null
  };
}

export function toggleExactMatching(isExactMatch) {
  return {
    type: types.CHORDBANK_TOGGLE_EXACT_MATCHING,
    payload: isExactMatch
  };
}

export function clearAllNotes() {
  return {
    type: types.CHORDBANK_CLEAR_ALL_NOTES,
    payload: {}
  };
}

export function setSelectedChordName(name) {
  return {
    type: types.CHORDBANK_SELECTED_CHORD_NAME,
    payload: name
  };
}

export function setSelectedScale(notes, name) {
  return {
    type: types.CHORDBANK_SET_SELECTED_SCALE,
    payload: {
      notes: notes,
      name: name
    }
  };
}