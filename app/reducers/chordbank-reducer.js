import * as types from './../actions/types';
import {get_possible_chords} from '../utility/get-possible-chords';
import {get_possible_scales} from '../utility/get-possible-scales';
var _ = require('lodash');

const initalState = {
  activeNotesRaw: [],
  activeNotes: [],
  possibleChords: [],
  exactChords: [],
  selectedChord: "",
  modeScales: [],
  allPossibleScales: [],
  isShowingExactChordMatches: false,
  selectedScaleNotes: []
};

const chordbankReducer = (state = initalState, action) => {
  switch (action.type) {

    // Add Notes
    case types.CHORDBANK_ADD_NOTE:

      let raw = _.cloneDeep(state.activeNotesRaw);
      raw.push(action.payload);

      if(state.activeNotes.indexOf(action.payload) === -1) {
        return Object.assign({}, state, {
          activeNotesRaw: raw,
          activeNotes: [...state.activeNotes, action.payload]
        });

      } else {
        return Object.assign({}, state, {
          activeNotesRaw: raw,
        });
      };

      break;


    // Delete Notes
    case types.CHORDBANK_DELETE_NOTE:

      let count = _.cloneDeep(state.activeNotesRaw).filter(note => note === action.payload);

      if(count.length <= 1) {
        return Object.assign({}, state, {
          activeNotesRaw: state.activeNotesRaw.filter(note => note !== action.payload),
          activeNotes: state.activeNotes.filter(note => note !== action.payload)
        });

      } else {
        let index = state.activeNotesRaw.indexOf(action.payload);
        let length = state.activeNotesRaw.length;

        let removed = state.activeNotesRaw.splice(index + 1, length);
        return Object.assign({}, state, {
          activeNotesRaw: removed
        });
      };

      break;


    // Populate chord bank
    case types.CHORDBANK_POPULATE_POSSIBLE_CHORDS:
      if(state.activeNotes.length >= 2) {

        let chord_matches = get_possible_chords(state.activeNotes);

        return Object.assign({}, state, {
          possibleChords: chord_matches.possible_chords,
          exactChords: chord_matches.exact_chords
        });

      } else {
        return state;
      };

      break;


    // Populate scales data
    case types.CHORDBANK_POPULATE_POSSIBLE_SCALES:
      if(state.selectedChord.length !== 0) {
        let scale_matches = get_possible_scales(state.selectedChord);

        return Object.assign({}, state, {
          modeScales: scale_matches.modeScales,
          allPossibleScales: scale_matches.allPossibleScales
        });

      } else {
        return state;
      };

      break;


    // Toggle either exact match of the chord or view the possibilities
    case types.CHORDBANK_TOGGLE_EXACT_MATCHING:
      return Object.assign({}, state, {
        isShowingExactChordMatches: !state.isShowingExactChordMatches
      });
      break;


    // Delete all data from the active notes array
    case types.CHORDBANK_CLEAR_ALL_NOTES:
      return {
        ...state,
        activeNotes: [],
        possibleChords: [],
        exactChords: [],
        selectedChord: ""
      };
      break;


    case types.CHORDBANK_SELECTED_CHORD_NAME:

      let scale_matches = get_possible_scales(action.payload);

      return Object.assign({}, state, {
        selectedChord: action.payload
      });


    case types.CHORDBANK_SET_SELECTED_SCALE_NOTES:
      return Object.assign({}, state, {
        selectedScaleNotes: action.payload
      });

    default:
      return state;
  }
};

export default chordbankReducer;
