import React, {Component} from 'react';
import store from '../../store';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNote, deleteNote, populateChordPossibilities} from '../../actions/chordbank-actions';
import {deleteSelected, addSelected} from '../../actions/fretboard-actions';
import {playTone} from '../../synth/play-sound';


class Fret extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className={`string__fret ${this.props.note.selected ? 'selected' : ''} ${this.props.isRoot ? 'root' : ''} ${this.props.guide ? 'guide' : ''}`}
           onClick={this.props.handleClick}>
        <p className="fret__name">
          {this.props.guide ? this.props.number : this.props.note.note}
        </p>
      </div>
    );
  }
};

Fret.propTypes = {
  note: PropTypes.object,
  handleFretClick: PropTypes.func
};

export default Fret;