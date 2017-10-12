import {DEV_GENERATE_MIDI_URL} from './config';
import axios from 'axios';
import _ from 'lodash';


export function generateMidi(notes, name, midi_type) {
  return new Promise((resolve, reject) => {
    axios.post(DEV_GENERATE_MIDI_URL, {
      notes: notes,
      name: name,
      midi_type: midi_type,
      
    }).then(response => {
      console.log(response);
      resolve(response);
  
    }).catch(error => {
      console.log(error);
      reject(error);
    });
  });
};