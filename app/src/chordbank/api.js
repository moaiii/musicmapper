import axios from 'axios';

const DEV_GENERATE_MIDI_URL = 'https://np49g065f1.execute-api.eu-west-1.amazonaws.com/v0/generate-midi';

export function generateMidi(notes, name, midi_type) {
  return new Promise((resolve, reject) => {
    axios.post(DEV_GENERATE_MIDI_URL, {
      notes: notes,
      name: name.replace(" ", ""), // remove empty spaces
      midi_type: midi_type

    }).then(response => {
      // console.log(response);
      resolve(response);

    }).catch(error => {
      // console.log(error);
      reject(error);
    });
  });
}
