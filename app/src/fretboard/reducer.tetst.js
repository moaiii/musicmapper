import reducer from './reducer';
import * as actions from './actions';

describe('Fretboard reducer', () => {
  describe('changing the tuning', () => {
    it('should return 6 notes - 1 root note per string', () => {
      expect(reducer(actions.changeTuning('STANDARD')))
        .toHaveLength(6)
    })
  })
})