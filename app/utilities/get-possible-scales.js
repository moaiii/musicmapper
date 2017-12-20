import scales_data from '../data/scales';

export function get_possible_scales(chordName) {

  let rootNote = chordName.charAt(1) === "#" ? 
                 chordName.substring(0, 2) : 
                 chordName.substring(0, 1);

  let modes = ["Lydian", "Ionian", "Mixolydian", "Dorian", "Aeolian", "Phrygian", "Locrian"];

  let scales_list = scales_data;

  let modeScales = scales_list.filter(scale => {
    return scale.root === rootNote && modes.includes(scale.mode);
  });

  let allPossibleScales = scales_list.filter(scale => scale.root === rootNote);

  return {
    modeScales: modeScales,
    allPossibleScales: allPossibleScales
  };
}