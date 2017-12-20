export default function Utility() {

  const TOTAL_NUM_FRETS = 22;

  let chromatic = ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#",
    "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"];

  let keyboard_chromatic = ["d", "f", "t", "g", "y", "h", "u", "j", "a", "w", "s", "e",
    "d", "f", "t", "g", "y", "h", "u", "j", "a", "w", "s", "e"];

  return {

    getChromatic: (octaves, startingNote) => {

      let index = chromatic.indexOf(startingNote);

      if(octaves === 1) {
        return {
          "chromatic": chromatic.slice(index, index + 12),
          "keyboard_chromatic": keyboard_chromatic.slice(index, index + 12)
        };

      } else if (octaves === 2) {
        return {
          "chromatic": chromatic.slice(index, index + 24),
          "keyboard_chromatic": keyboard_chromatic.slice(index, index + 12)
        };

      } else {
        return {
          "chromatic": chromatic,
          "keyboard_chromatic": keyboard_chromatic
        };
      }
    },


    renderString: (rootNote) => {
      let i = 0;
      let notes = [];
      let offset = chromatic.indexOf(rootNote);
      while(i <= TOTAL_NUM_FRETS) {
        notes.push({
          note: chromatic[(i % 12) + offset],
          selected: false,
          octave: (i >= 12 ? 5 : 4)
        });
        i++;
      }
      return notes;
    },


    renderScale: (intervals) => {
      let test = [1, 2, 2, 1, 2, 1]; // 0, 1, 3, 5, 6, 8, 9,
      let indices = intervals.map((int, array, index) => {
        // if(index ==== 0 )
      })
    }
  }
}