import React, {Component} from 'react';
import store from '../../../store';
import {addNote, deleteNote, populateChordPossibilities} from '../../chordbank/actions';

class Key extends Component {

  constructor() {
    super();

    this.state = {
      selected: false,
      note_class_modifier: ""
    };
  }

  componentDidMount() {
    if(this.props.note.indexOf("#") >= 0)
    {this.setState({note_class_modifier: " sharp"});}
  }

  _handleKeyClick() {
    !this.state.selected ? this._addNote() : this._deleteNote();
    store.dispatch(populateChordPossibilities());
  }

  _addNote() {
    this.setState({
      selected: true
    }, () => {
      store.dispatch(addNote(this.props.note));
    });
  }

  _deleteNote() {
    this.setState({
      selected: false
    }, () => {
      store.dispatch(deleteNote(this.props.note));
    });
  }

  render() {
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

export default Key;