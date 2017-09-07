import * as types from './../actions/types';
import {get_possible_chords} from '../utility/get-possible-chords';


const initalState = {
  activeNotes: [],
  possibleChords: [],
  exactChords: [],
  isShowingExactChordMatches: false,
  selectedChord: "",
  chordSelectors: [
    {
      'name': undefined,
      'selected': true,
      'color': '#27ae60'
    },
    {
      'name': undefined,
      'selected': false,
      'color': '#2980b9'
    },
    {
      'name': undefined,
      'selected': false,
      'color': '#9b59b6'
    },
    {
      'name': undefined,
      'selected': false,
      'color': '#f1c40f'
    },
    {
      'name': undefined,
      'selected': false,
      'color': '#c0392b'
    }
  ]
};

const chordbankReducer = (state = initalState, action) => {
  switch (action.type) {

    // Add Notes
    case types.CHORDBANK_ADD_NOTE:
      if(state.activeNotes.indexOf(action.payload) === -1) {

        return {
          ...state,
          activeNotes: [...state.activeNotes, action.payload]
        };
      } else {
        return state;
      };
      break;


    // Delete Notes
    case types.CHORDBANK_DELETE_NOTE:
      return {
        ...state,
        activeNotes: state.activeNotes.filter(element => element !== action.payload)
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
      }

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

      // let newChordSelectorCopy = state.chordSelectors.map((selector) => {
      //   if(selector['selected']) {
      //     selector['selected'] = action.payload
      //   }
      // });
      //
      // console.log('newChordSelectorCopy', newChordSelectorCopy);

      return Object.assign({}, state, {
        selectedChord: action.payload,
        // chordSelectors: newChordSelectorCopy
      });

    default:
      return state;
  }
};

export default chordbankReducer;
