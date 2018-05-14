import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from '../../../store';
import {addNote, deleteNote, populateChordPossibilities} from '../../chordbank/actions';

class Key extends Component {

  constructor () {
    super();

    this.state = {
      selected: false,
      note_class_modifier: ""
    };
  }

  componentDidMount () {
    if(this.props.note.indexOf("#") >= 0) {
      this.setState({note_class_modifier: " sharp"});
    }
  }

  _handleKeyClick () {
    if(!this.state.selected) {
      this._addNote();
    } else {
      this._deleteNote();
    }

    store.dispatch(populateChordPossibilities());
  }

  _addNote () {
    this.setState({
      selected: true
    }, () => {
      store.dispatch(addNote(this.props.note));
    });
  }

  _deleteNote () {
    this.setState({
      selected: false
    }, () => {
      store.dispatch(deleteNote(this.props.note));
    });
  }

  render () {
    const {id, key_class_mod, note, showLaptopKey, keyboard_note} = this.props;
    const {note_class_modifier} = this.state;

    let keyName = showLaptopKey ? keyboard_note : note;

    return (
      <div id={id}
        className={`keyboard__key
        ${note_class_modifier} ${key_class_mod} ${note.charAt(0)}`}>
        <p className="key__name">{keyName}</p>
      </div>
    );
  }
}

Key.propTypes = {
  id: PropTypes.string,
  key_class_mod: PropTypes.string,
  note: PropTypes.object,
  showLaptopKey: PropTypes.bool,
  keyboard_note: PropTypes.bool
};

export default Key;
