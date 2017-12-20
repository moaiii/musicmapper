import chords_data from '../data/chords';
var _ = require('lodash');


export function get_possible_chords(activeNotes) {

    let all_chords = chords_data;

    let possible_chords = all_chords.filter(chord => {
      if(_.difference(activeNotes, chord.notes).length === 0) {
        let match = chord;

        // Append the data for the difference in notes
        match.difference = _.difference(chord.notes, activeNotes);
        return match;
      }
    });

    let exact_chords = all_chords.filter(chord => {
      return (_.difference(chord.notes, activeNotes).length === 0 &&
              _.difference(activeNotes, chord.notes).length === 0)
    });

    return {
      "possible_chords": possible_chords,
      "exact_chords": exact_chords
    }
};