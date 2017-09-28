import {connect} from 'react-redux';
import React, {Component} from 'react';
import PossibleChords from './possible-chords';
import store from '../../store';
import {clearAllNotes} from '../../actions/chordbank-actions';
import {clearSelection} from '../../actions/keyboard-actions';
import {deleteAllSelected} from '../../actions/fretboard-actions';
import {generateMidi} from '../../api/midi-api';
import _ from 'lodash';


class ChordBank extends Component {

  constructor() {
    super();

    this.state = {
      downloadLink: ""
    };
  };

  
  componentDidMount() {};


  _clearNotes() {
    store.dispatch(clearAllNotes());
    store.dispatch(clearSelection());
    store.dispatch(deleteAllSelected());
  };


  _downloadChord() {
    generateMidi({
      notes: this.props.notes, 
      diff: this.props.differenceNotes, 
      chordName: this.props.selectedChord
    
    }).then((response) => {

      this.setState({
        downloadLink: JSON.parse(response.data.body)["download-link"]

      }, () => {
        window.open(this.state.downloadLink);
      });

    }).catch((error) => {
      console.log('Error in chord bank: ', error);
    });
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
};

const mapStoreToProps = (store) => {
  return {
    notes: store.chordbankState.activeNotes,
    selectedChord: store.chordbankState.selectedChord,
    differenceNotes: store.keyboardState.differenceNotes
  };
};

export default connect(mapStoreToProps)(ChordBank);