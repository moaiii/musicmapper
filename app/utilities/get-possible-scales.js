import scales_data from '../data/scales';

const modes = ["Lydian", "Ionian", "Mixolydian", "Dorian", "Aeolian", "Phrygian", "Locrian"];

export function get_possible_scales (chordName) {
  let rootNote = chordName.charAt(1) === "#"
    ? chordName.substring(0, 2)
    : chordName.substring(0, 1);


  let modeScales = get_mode_scales(rootNote, modes);
  let allPossibleScales = get_all_possible_scales(rootNote);

  return {modeScales, allPossibleScales};
}

export function get_mode_scales (rootNote) {
  return scales_data.filter(scale => {
    return scale.root === rootNote && modes.includes(scale.mode);
  });
}

export function get_all_possible_scales (rootNote) {
  return scales_data.filter(scale => scale.root === rootNote);
}
