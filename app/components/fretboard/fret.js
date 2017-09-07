import React, {Component} from 'react';
import store from '../../store';
import {connect} from 'react-redux';
import {addNote, deleteNote, populateChordPossibilities} from '../../actions/chordbank-actions';
import {deleteSelected, addSelected} from '../../actions/fretboard-actions';
import {playTone} from '../../synth/play-sound';

class Fret extends Component {

  constructor() {
    super();

    this.state = {
      selected: false,
      className: "fret",
      classNameSelected: "fret selected",
      octave: null
    };
  }

  componentDidMount() {
    if(this.props.isRoot) {
      this.setState({
        className: this.state.className + " root",
        octave: this.props.fretboardNotes[this.props.index.string_index][this.props.index.fret_index].octave
      })
    } else {
      this.setState({
        octave: this.props.fretboardNotes[this.props.index.string_index][this.props.index.fret_index].octave
      })
    }
  }

  _handleFretClick() {
    !this.state.selected ? this._addNote() : this._deleteNote();
  }

  _addNote() {

    let note = this.props.fretboardNotes[this.props.index.string_index][this.props.index.fret_index].note;

    store.dispatch(addNote(note));
    store.dispatch(addSelected(this.props.index.string_index, this.props.index.fret_index));
    store.dispatch(populateChordPossibilities());
    this.props.audioEnabled ? playTone(note, this.state.octave) : null;
  }

  _deleteNote() {

    let note = this.props.fretboardNotes[this.props.index.string_index][this.props.index.fret_index].note;

    store.dispatch(deleteNote(note));
    store.dispatch(deleteSelected(this.props.index.string_index, this.props.index.fret_index));
    store.dispatch(populateChordPossibilities());
  }

  render() {

    let note = this.props.fretboardNotes[this.props.index.string_index][this.props.index.fret_index].note;
    let selected = this.props.fretboardNotes[this.props.index.string_index][this.props.index.fret_index].selected;

    return (
      <div className={selected ? this.state.classNameSelected : this.state.className}
           onClick={!this.props.guide ? this._handleFretClick.bind(this) : null}>
        <p className="fret__name">
          {note}
        </p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    audioEnabled: store.fretboardState.audioEnabled,
    fretboardNotes: store.fretboardState.fretboardNotes
  };
};

export default connect(mapStoreToProps)(Fret);