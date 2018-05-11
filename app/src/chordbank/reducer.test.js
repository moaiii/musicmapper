import reducer from './reducer';
import actions from './actions';

describe('Chordbank reducer', () => {
  describe('sending a g# to CHORDBANK_ADD_NOTE', () => {
    let actionCreator = {
      type: 'CHORDBANK_ADD_NOTE',
      payload: 'g#'
    }

    let initialState = {
      activeNotesRaw: ['e','g#','c','c'],
      activeNotes: ['e','g#','c'],
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

    it('should add note to raw notes', () => {
      expect(reducer(initialState, actionCreator))
        .toHaveProperty('activeNotesRaw', ['e','g#','c','c','g#']);
    })
    it('should not add note to active notes (no duplication)', () => {
      expect(reducer(initialState, actionCreator))
        .toHaveProperty('activeNotes', ['e','g#','c']);
    })
  })

  describe('sending a c note to CHORDBANK_DELETE_NOTE', () => {
    let actionCreator__c = {
      type: 'CHORDBANK_DELETE_NOTE',
      payload: 'C'
    }

    let actionCreator__e = {
      type: 'CHORDBANK_DELETE_NOTE',
      payload: 'E'
    }

    let initialState = {
      activeNotesRaw: ['E','G#','C','C'],
      activeNotes: ['E','G#','C'],
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

    it('should remove one instance from the activeNotesRaw array', () => {
      expect(reducer(initialState, actionCreator__c))
        .toHaveProperty('activeNotes', ['E','G#','C'])
    })
    it('2nd call should remove C from the activeNotes array', () => {
      expect(reducer(initialState, actionCreator__c))
        .toHaveProperty('activeNotes', ['E','G#'])
    })
    it('3rd call should return the same activeNotes array unchanged', () => {
      expect(reducer(initialState, actionCreator__c))
        .toHaveProperty('activeNotes', ['E','G#'])
    })
    // console.log(initialState);
    // it('should remove the e note from array', () => {
    //   expect(reducer(initialState, actionCreator__e))
    //     .toHaveProperty('activeNotes', ['G#'])
    // })
  })
});

