import reducer from './reducer';
import * as actions from './actions';

describe('Keyboard reducer', () => {
  describe('clearing the selected', () => {
    it('should return empty arrays', () => {
      expect(reducer(undefined, actions.clearSelection()))
        .toHaveProperty('highlightedNotes', []);
      expect(reducer(undefined, actions.clearSelection()))
        .toHaveProperty('differenceNotes', []);
    });
  });

  describe('highlighting the selected', () => {
    let payload = {
      notes: ['a','b','c'],
      difference: ['d','e','f']
    };

    it('sets the notes in the array', () => {
      expect(reducer(undefined, actions.highlightSelection(payload)))
        .toHaveProperty('highlightedNotes', ['a','b','c']);
      expect(reducer(undefined, actions.highlightSelection(payload)))
        .not.toHaveProperty('highlightedNotes', ['d','e','f']);

      expect(reducer(undefined, actions.highlightSelection(payload)))
        .toHaveProperty('differenceNotes', ['d','e','f']);
      expect(reducer(undefined, actions.highlightSelection(payload)))
        .not.toHaveProperty('differenceNotes', ['a','b','c']);
    });
  });

  describe('toggling the laptop notes', () => {
    it('turns the notes on', () => {
      expect(reducer(undefined, actions.toggleLaptopKeyboardKeys(true)))
        .toHaveProperty('showLaptopKeys', true);
    });
    it('turns the notes off', () => {
      expect(reducer(undefined, actions.toggleLaptopKeyboardKeys(false)))
        .toHaveProperty('showLaptopKeys', false);
    });
  });
});