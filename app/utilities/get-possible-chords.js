import chords_data from '../data/chords';
var _ = require('lodash');

export function get_possible_chords (activeNotes) {
  let possible_chords = get_all_possible_chords(activeNotes);
  let exact_chords = get_exact_chords(activeNotes);

  return {
    "possible_chords": possible_chords,
    "exact_chords": exact_chords
  };
}

export function get_exact_chords (activeNotes) {
  return chords_data.filter(chord => {
    return _.difference(chord.notes, activeNotes).length === 0 &&
      _.difference(activeNotes, chord.notes).length === 0; // i.e. no difference
  });
}

export function get_all_possible_chords (activeNotes) {
  return chords_data.filter(chord => {
    if(_.difference(activeNotes, chord.notes).length === 0) {
      let match = chord;
      // Append the data for the difference in notes
      match.difference = _.difference(chord.notes, activeNotes);
      return match;
    }
  });
}
