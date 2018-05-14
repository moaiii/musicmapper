import * as api from './api';

describe('Generating the midi file', () => {
  describe('for chords', () => {
    let chord_midi_type = "chord";
    let chord_name = "Emaj";
    let chord_notes = ["E", "B", "G#"];

    it('returns a 200 and a download link', () => {
      expect.assertions(2);

      return api.generateMidi(chord_midi_type, chord_name, chord_notes)
        .then(response => {
          let statusCode = response.data.statusCode;

          expect(statusCode).toBe('200');

          let downloadLink = JSON.parse(response.data.body)['download-link'];

          expect(downloadLink)
            .toMatch(/musicmapper-midifiles.s3-eu-west-1.amazonaws.com/);
        });
    });
  });

  describe('for scales', () => {
    let scale_midi_type = "scales";
    let scale_name = "E-naturalminor";
    let scale_notes = ["E,F#,G,A,B,C,D"];

    it('returns a 200 and a download link', () => {
      expect.assertions(2);

      return api.generateMidi(scale_midi_type, scale_name, scale_notes)
        .then(response => {
          let statusCode = response.data.statusCode;

          expect(statusCode).toBe('200');

          let downloadLink = JSON.parse(response.data.body)['download-link'];

          expect(downloadLink)
            .toMatch(/musicmapper-midifiles.s3-eu-west-1.amazonaws.com/);
        });
    });
  });
});
