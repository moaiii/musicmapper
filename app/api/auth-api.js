import {DEV_GENERATE_MIDI_URL} from './config';
import axios from 'axios';
import _ from 'lodash';


export function newRegistration(form) {

  axios.post(DEV_GENERATE_MIDI_URL, {
    name: form.name,
    username: form.username,
    email: form.email,
    password: form.password
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}