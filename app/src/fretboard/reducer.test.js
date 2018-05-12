import reducer from './reducer';
import * as actions from './actions';

describe('Fretboard reducer', () => {
  describe('changing the tuning', () => {
    it('should return 6 notes - 1 root note per string', () => {
      expect(reducer(undefined, actions.changeTuning('STANDARD'))['tuning'])
        .toHaveLength(6)
    })

    it('should return the correct tuning', () => {
      expect(reducer(undefined, actions.changeTuning('Drop D')))
        .toHaveProperty('tuning', ["D", "A", "D", "G", "B", "E"])
    })
  })

  describe('calculating notes', () => {
    let initialState = {
      tuning: ['E','A','D','G','B','E'],
      fretboardNotes: [],
      audioEnabled: false
    }

    it('should return a 6 x 23 matrix (2d array)', () => {
      // testing a 2d array workaround 
      for(let i=0; i<6; i++) {
        // we have a full note
        expect(reducer(initialState, actions.calculateFretboardNotes())['fretboardNotes'][i])
          .toHaveLength(23);
        // the 12th fret note is the same as the root open note (1 octave) 
        expect(reducer(initialState, actions.calculateFretboardNotes())['fretboardNotes'][i][12]['note'])
          .toEqual(initialState.tuning[i]);
      }
    })
  })

  describe('toggling the audio output', () => {
    it('should turn on', () => {
      expect(reducer(undefined, actions.toggleAudio()))
        .toHaveProperty('audioEnabled', true)
    })
  })

  describe('deleting a note from the fretboard', () => {
    it('sets its \'selected\' value in the matrix to false', () => {
      let stateWithTuningData = reducer(undefined, actions.changeTuning('STANDARD'));
      let stateWithFretboardData = reducer(stateWithTuningData, actions.calculateFretboardNotes());
      let stateWithSelectedNote = reducer(stateWithFretboardData, actions.addSelected(3,13));

      expect(reducer(stateWithSelectedNote, actions.deleteSelected(3,13))['fretboardNotes'][3][13].selected)
        .toEqual(false)
    })
  })

  describe('selecting a note on the fretboard', () => {
    it('sets its \'selected\' value in the matrix to true', () => {
      let stateWithTuningData = reducer(undefined, actions.changeTuning('STANDARD'));
      let stateWithFretboardData = reducer(stateWithTuningData, actions.calculateFretboardNotes())

      // truth checks
      expect(reducer(stateWithFretboardData, actions.addSelected(0,0))['fretboardNotes'][0][0].selected)
        .toEqual(true)
      // false checks
      expect(reducer(stateWithFretboardData, actions.addSelected(3,0))['fretboardNotes'][3][12].selected)
        .toEqual(false)
    })

    // it('should remove any other selected notes on the same string', () => {})
  })

  describe('deleting all selected notes in the fretboard', () => {
    let stateWithTuningData = reducer(undefined, actions.changeTuning('STANDARD'));
    let stateWithFretboardData = reducer(stateWithTuningData, actions.calculateFretboardNotes());
    let stateWithSelectedNote = reducer(stateWithFretboardData, actions.addSelected(0,12));

    it('should return an matrix of 6 x 23', () => {
      for(let i=0; i<6; i++) {
        expect(reducer(stateWithSelectedNote, actions.deleteAllSelected())['fretboardNotes'][i])
          .toHaveLength(23);

        for(let j=0; j<23; j++) {
          expect(reducer(stateWithSelectedNote, actions.deleteAllSelected())['fretboardNotes'][i][j].selected)
            .toEqual(false);
        }
      }
    })
  })

})