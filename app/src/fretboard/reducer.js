import * as types from '../../types';
import tunings from '../../data/tunings';
import Utility from '../../utilities/utility';
var _ = require('lodash');


const initalState = {
  tuning: [],
  fretboardNotes: [],
  audioEnabled: false
};

const fretboardReducer = (state = initalState, action) => {
  switch (action.type) {

    case types.FRETBOARD_CHANGE_TUNING:

      //lookup tuning by name
      let tuning_list = tunings;
      let notes = [];

      for(let i=0; i < tuning_list.length; i++) {
        if(tuning_list[i].name === action.payload) {
          notes = tuning_list[i].notes;
          break;
        }
      }

      return Object.assign({}, state, {
        tuning: notes
      });
      break;


    case types.FRETBOARD_CALCULATE_NOTES:

      let utility = Utility();
      let fretboard_notes = state.tuning.map((note) => utility.renderString(note));

      return Object.assign({}, state, {
        fretboardNotes: fretboard_notes
      });
      break;


    case types.FRETBOARD_TOGGLE_AUDIO:
      return Object.assign({}, state, {
        audioEnabled: !state.audioEnabled
      });
      break;


    case types.FRETBOARD_ADD_SELECTED:

      let newFretboardNotesAdd = _.cloneDeep(state.fretboardNotes);

      newFretboardNotesAdd[action.payload.string_index][action.payload.fret_index].selected = true;

      return Object.assign({}, state, {
        fretboardNotes: newFretboardNotesAdd
      });
      break;


    case types.FRETBOARD_DELETE_SELECTED:

      let newFretboardNotesDelete = _.cloneDeep(state.fretboardNotes);

      newFretboardNotesDelete[action.payload.string_index][action.payload.fret_index].selected = false;

      return Object.assign({}, state, {
        fretboardNotes: newFretboardNotesDelete
      });
      break;


    case types.FRETBOARD_DELETE_ALL_SELECTED:

      let NUM_STRINGS = 6;
      let NUM_FRETS = 23;

      let newFretboardNotesDeleteAll = _.cloneDeep(state.fretboardNotes);

      for(let i = 0; i < NUM_STRINGS; i++) {
        for(let j = 0; j < NUM_FRETS; j++) {
          newFretboardNotesDeleteAll[i][j].selected = false;
        }
      }

      return Object.assign({}, state, {
        fretboardNotes: newFretboardNotesDeleteAll
      });
      break;

    default:
      return state;
  }
};

export default fretboardReducer;