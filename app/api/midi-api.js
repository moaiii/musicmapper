import {DEV_GENERATE_MIDI_URL} from './config';
import axios from 'axios';
import _ from 'lodash';


export function generateMidi(input) {

  return new Promise((resolve, reject) => {
    let all_notes = _.concat(input.notes, input.diff);
    
    axios.post(DEV_GENERATE_MIDI_URL, {
      notes: all_notes,
      name: input.chordName,
      timeStamp: input.timeStamp
      
    }).then(response => {
      console.log(response);
      resolve(response);
  
    }).catch(error => {
      console.log(error);
      reject(error);
    });
  });
};