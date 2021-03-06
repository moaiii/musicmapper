import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import store from '../../../store';
import {addSelected, deleteSelected} from "../../fretboard/actions";
import {addNote, deleteNote, populateChordPossibilities} from "../../chordbank/actions";
import {playTone} from '../../../utilities/play-sound';
import String from './string';
import ReactTooltip from 'react-tooltip';

var _ = require('lodash');

class Fretboard extends Component {

  constructor () {
    super();

    this._handleClick = (a, b) => {

      if(this.props.fretboardNotes[a][b].selected) {
        store.dispatch(deleteSelected(a, b));
        store.dispatch(deleteNote(this.props.fretboardNotes[a][b].note));
      } else {

        // Delete any currently selected notes on that string and replace with new
        // so that only one fret can be selected per string
        let selectedFretIndex = null;
        let selectedFretNote = null;

        this.props.fretboardNotes[a]
          .forEach((fret, index) => {
            if(fret.selected === true) {
              selectedFretIndex = index;
              selectedFretNote = fret.note;
            }
          });

        if(selectedFretIndex !== null && selectedFretNote !== null) {
          store.dispatch(deleteSelected(a, selectedFretIndex));
          store.dispatch(deleteNote(selectedFretNote));
        }

        // add note
        store.dispatch(addSelected(a, b));
        store.dispatch(addNote(this.props.fretboardNotes[a][b].note));

        // higher octave if beyond middle of fretboard
        let octave = b >= 11 ? 5 : 4;

        // play tuning tone
        if(this.props.audioEnabled) {
          playTone(this.props.fretboardNotes[a][b].note, octave);
        }
      }

      store.dispatch(populateChordPossibilities());

      // this.props.fretboardNotes[a][b];
    };
  }

  render () {

    let numberGuide =
      <String
        key={'Guide'}
        guide={true}
        openNote={"~"}
        notes={_.fill(Array(22), {note: "", selected: false, octave: 0})}
        stringNumber={7}
        handleClick={null}
      />;

    let strings = this.props.fretboardNotes
      .map((notes, index) =>
        <String
          stringIndex={index}
          key={'S-' + index}
          openNote={notes[0].note}
          guide={false}
          notes={notes}
          stringNumber={index}
          handleClick={this._handleClick}
        />);

    return (
      <div className="fretboard"
        data-tip data-for='tooltip__fretboard'>
        {numberGuide}
        {strings}

        <ReactTooltip
          id='tooltip__fretboard'
          place="top"
          type="success"
          effect="solid"
          disable={!this.props.tooltipIsOn}>
          <p>This is your fretboard</p>
          <p>Enter your chords notes one by one</p>
        </ReactTooltip>
      </div>
    );
  }
}

Fretboard.propTypes = {
  fretboardNotes: PropTypes.array,
  tooltipIsOn: PropTypes.bool,
  audioEnabled: PropTypes.bool
};

const mapStoreToProps = (store) => {
  return {
    fretboardNotes: store.fretboardState.fretboardNotes,
    audioEnabled: store.fretboardState.audioEnabled,
    tooltipIsOn: store.generalState.tooltipIsOn
  };
};

export default connect(mapStoreToProps)(Fretboard);
