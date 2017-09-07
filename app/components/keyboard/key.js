import React, {Component} from 'react';
import store from '../../store';
import {addNote, deleteNote, populateChordPossibilities} from '../../actions/chordbank-actions';

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
      this.setState({note_class_modifier: " sharp"})
  }

  _handleKeyClick() {
    !this.state.selected ? this._addNote() : this._deleteNote();
    store.dispatch(populateChordPossibilities())
  };

  _addNote() {
    this.setState({
      selected: true
    }, () => {
      store.dispatch(addNote(this.props.note));
      console.log("Adding ", this.props.note);
    })
  }

  _deleteNote() {
    this.setState({
      selected: false
    }, () => {
      store.dispatch(deleteNote(this.props.note));
      console.log("Deleting ", this.props.note);
    })
  }

  render() {

    return(
      <div className={`keyboard__key${this.state.note_class_modifier} ${this.props.key_class_mod}`}
           onClick={this._handleKeyClick.bind(this)}>
        <p className="key__name">{this.props.note}</p>
        {this.props.showLaptopKey ? <p className="key__name--keyboard">({this.props.keyboard_note})</p> : null}
      </div>
    );
  }
}

export default Key;