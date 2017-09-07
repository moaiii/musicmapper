import {connect} from 'react-redux';
import React, {Component} from 'react';
import PossibleChords from './possible-chords';
import store from '../../store';
import {clearAllNotes} from '../../actions/chordbank-actions';
import {clearSelection} from '../../actions/keyboard-actions';
import {deleteAllSelected} from '../../actions/fretboard-actions';
import _ from 'lodash';

const MIDI_GENERATOR_URL = "http://localhost:5000/generator/";


class ChordBank extends Component {

  constructor() {
    super();

    this.state = {
      selectors: []
    };
  };

  componentDidMount() {};

  _clearNotes() {
    store.dispatch(clearAllNotes());
    store.dispatch(clearSelection());
    store.dispatch(deleteAllSelected());
  }

  _downloadChord() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };

    var regex_sharp = new RegExp(/[#]/, 'g');
    let octave = 4;

    let note_params = _.concat(this.props.notes, this.props.differenceNotes)
      .map((note) => `${note}${octave}`)
      .join(`_`)
      .replace(regex_sharp, `$`)
      .toLowerCase();

    let chord_name = this.props.selectedChord.length > 0 ? this.props.selectedChord : "misc";

    let url = `${MIDI_GENERATOR_URL}${chord_name}/${note_params}`;
    console.log("url: ", url);

    xhttp.open("GET", url, true);
    xhttp.send();
  };

  render() {
    return(
      <div className="chordbank">
        <div className="chordbank__data">
          <h4 className="chordbank__header">
            Selected Notes
          </h4>
          {this.props.notes.map((note, index) =>
            <p className="chordbank__active-notes"
               key={`Sel-Note-${index}`}>
              {note}
            </p>
          )}
        </div>

        <div className="chordbank__data">
          <h4 className="chordbank__header">
            Selected Chord
          </h4>
          <p className="chordbank__selected-chord">
            {this.props.selectedChord}
          </p>
        </div>

        <div className="chordbank__data">
          <h4 className="chordbank__header">
            Difference
          </h4>
          {this.props.differenceNotes.map((note, index) =>
            <p className="chordbank__active-notes"
               key={`Dif-Note-${index}`}>
              {note}
            </p>
          )}
        </div>

        <div className="button-bar">
          <button className="chordbank__button"
                  onClick={this._clearNotes.bind(this)}>
            <p>Clear</p>
          </button>

          <button className="chordbank__button"
                  onClick={this._downloadChord.bind(this)}>
            <p>Download Midi</p>
          </button>
        </div>
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
  return {
    notes: store.chordbankState.activeNotes,
    selectedChord: store.chordbankState.selectedChord,
    differenceNotes: store.keyboardState.differenceNotes
  };
};

export default connect(mapStoreToProps)(ChordBank);