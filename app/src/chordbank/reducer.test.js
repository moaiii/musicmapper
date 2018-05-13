import reducer from './reducer';
import * as actions from './actions';

describe('Chordbank reducer', () => {

  // action: CHORDBANK_ADD_NOTE
  describe('adding G# to selected notes', () => {
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
      expect(reducer(initialState, actions.addNote('g#')))
        .toHaveProperty('activeNotesRaw', ['e','g#','c','c','g#']);
    })
    it('should not add note to active notes (no duplication)', () => {
      expect(reducer(initialState, actions.addNote('g#')))
        .toHaveProperty('activeNotes', ['e','g#','c']);
    })
  })

  // action: CHORDBANK_DELETE_NOTE
  describe('deleting a C note', () => {
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
      expect(reducer(initialState, actions.deleteNote('C')))
        .toHaveProperty('activeNotes', ['E','G#','C'])
    })
    it('2nd call should remove C from the activeNotes array', () => {
      expect(reducer(initialState, actions.deleteNote('C')))
        .toHaveProperty('activeNotes', ['E','G#'])
    })
    it('3rd call should return the same activeNotes array unchanged', () => {
      expect(reducer(initialState, actions.deleteNote('C')))
        .toHaveProperty('activeNotes', ['E','G#'])
    })
  })

  // action: CHORDBANK_POPULATE_POSSIBLE_CHORDS
  describe('getting all possible chords', () => {
    let addFirstNote = reducer(undefined, actions.addNote('E'));
    let addSecondNote = reducer(addFirstNote, actions.addNote('B'));

    it('should return an array of at least one exact match', () => {
      expect(reducer(addSecondNote, actions.populateChordPossibilities()).exactChords)
        .toHaveLength(1)
    })

    it('should return an array of at least one exact match', () => {
      expect(reducer(addSecondNote, actions.populateChordPossibilities()).possibleChords.length)
        .toBeGreaterThanOrEqual(2)
    })
  })

  // action: CHORDBANK_POPULATE_POSSIBLE_SCALES
  describe('getting all possible scales', () => {
    let selectChord = reducer(undefined, actions.setSelectedChordName('Emaj'));

    it('should return the 7 scales of the modes', () => {
      expect(reducer(selectChord, actions.populateAllScales()).modeScales)
        .toHaveLength(7)
    })

    it('should return all 36 other scales as defined in the data', () => {
      expect(reducer(selectChord, actions.populateAllScales()).allPossibleScales)
        .toHaveLength(36)
    })
  })

  // action: CHORDBANK_TOGGLE_EXACT_MATCHING
  describe('setting exact chord matching mode', () => {
    expect.extend({
      toBeOfType(received, argument) {
        if(typeof received === argument) {
          return {
            message: () => `expected ${received} to be a ${argument}`,
            pass: true,
          };
        } else {
          return {
            message: () => `expected ${received} to be a ${argument}`,
            pass: false
          }
        }
      }
    })

    it('should be a boolean', () => {
      expect(reducer(undefined, actions.toggleExactMatching(true)).isShowingExactChordMatches)
        .toBeOfType('boolean')
    })

    it('should be set verbatum', () => {
      expect(reducer(undefined, actions.toggleExactMatching(true)).isShowingExactChordMatches)
        .toBe(true)
    })
  })

  // action: CHORDBANK_CLEAR_ALL_NOTES
  describe('clearing all active notes', () => {
    let addFirstNote = reducer(undefined, actions.addNote('E'));
    let addSecondNote = reducer(addFirstNote, actions.addNote('B'));
    let addThirdNote = reducer(addSecondNote, actions.addNote('E'));
    let addFourthNote = reducer(addThirdNote, actions.addNote('B'));

    it('should return empty arrays and objects i.e. re-init', () => {
      expect(reducer(addFourthNote, actions.clearAllNotes()))
        .toHaveProperty('activeNotes', [])
      expect(reducer(addFourthNote, actions.clearAllNotes()))
        .toHaveProperty('selectedChord', '')
    })
  })

  // action: CHORDBANK_SELECTED_CHORD_NAME
  describe('setting the selected chord name', () => {
    it('should set it verbattum', () => {
      expect(reducer(undefined, actions.setSelectedChordName('D5')))
        .toHaveProperty('selectedChord', 'D5')
    })
  })

  // action: CHORDBANK_SET_SELECTED_SCALE
  describe('setting the selected scale', () => {
    it('should set an array of at least 5 notes', () => {
      expect(reducer(undefined, 
        actions.setSelectedScale("D- Major", ["D", "E", "F#", "G", "A", "B", "C#"]))['selectedScale'].notes.length)
        .toBeGreaterThanOrEqual(4)
    })
  })
});

