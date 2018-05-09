import reducer from './reducer';
import actions from './actions';

describe('Chordbank reducer', () => {
  let state = null;

  beforeEach(() => {
    state = {
      activeNotesRaw: [],
      activeNotes: [],
      possibleChords: [],
      exactChords: [],
      selectedChord: "",
      modeScales: [],
      allPossibleScales: [],
      isShowingExactChordMatches: false,
      selectedScale: {
        name: "",
        notes: ""
      }
    };
  });

  describe('sending a g# to CHORDBANK_ADD_NOTE', () => {
    it('should add it to the active notes array', () => {
      let state_tested = Object.assign({}, state, { 
        activeNotes: ["g#"],
        activeNotesRaw: ['g#'] 
      })

      expect(reducer(undefined, {
        type: 'CHORDBANK_ADD_NOTE',
        payload: 'g#'
      })).toEqual(state_tested)
    })
  })
})