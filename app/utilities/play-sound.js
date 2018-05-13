import base_freq from './frequency';

let audioContext = new (window.AudioContext || window.webkitAudioContext);

let masterGainNode = audioContext.createGain();
masterGainNode.connect(audioContext.destination);
masterGainNode.gain.value = 0.2;


/**
 *
 * @param freq {String}
 * @returns {*}
 */
export function playTone(freq, octave) {

  let freq_value = base_freq[freq] * Math.pow(octave, 2);

  let osc = audioContext.createOscillator();
  osc.connect(masterGainNode);
  osc.type = "triangle";

  osc.frequency.value = freq_value;

  osc.start();

  setTimeout(() => {
    osc.stop();
    // masterGainNode.gain.value = 0.5;
  }, 500);

  return osc;
}