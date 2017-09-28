import AudioController from './audio-controller';
import React, {Component} from 'react';
import {changeTuning, calculateFretboardNotes, addSelected, 
  deleteSelected} from "../../actions/fretboard-actions"
import {addNote, deleteNote, populateChordPossibilities} from "../../actions/chordbank-actions";
import {connect} from 'react-redux';
import String from './string';
import store from '../../store';
import Tuning from '../fretboard/tuning';


class Fretboard extends Component {

  constructor() {
    super();

    this._handleClick = (a, b) => {
      
      if(this.props.fretboardNotes[a][b].selected) {
        store.dispatch(deleteSelected(a, b));
        store.dispatch(deleteNote(this.props.fretboardNotes[a][b].note));
      } else {
        store.dispatch(addSelected(a, b));
        store.dispatch(addNote(this.props.fretboardNotes[a][b].note));
      }
        
      store.dispatch(populateChordPossibilities());

      this.props.fretboardNotes[a][b];
    };

    //find a note on that string already
    // yes - delete it 
    //     - add your new one

    // chord bank raw
    //     - duplicates
  };

  render() {

    let strings = this.props.fretboardNotes
      .map((notes, index) => 
        <String
          key={'S-' + index}
          openNote={notes[0].note}
          notes={notes}
          stringNumber={index}
          handleClick={this._handleClick}
        />);

    return (
      <div className="fretboard__container">
        <div className="fretboard__header">
          <div className="header__tuning">
            <h4 className="tuning__title">Tuning</h4>
            <Tuning/>
            {this.props.tuningSelection
              .map((note: string, index: number) =>
                <h4 key={`tuning-note-${index}`} 
                    className="tuning__note">
                    {note}
                </h4>
            )}
          </div>
        </div>

        <div className="fretboard">
          {strings}
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    tuningSelection: store.fretboardState.tuning,
    fretboardNotes: store.fretboardState.fretboardNotes
  };
};

export default connect(mapStoreToProps)(Fretboard);


// let numberGuide =
//   <String
//     key={"guide-string"}
//     guide={true}
//     className='fretboard__guide-string'
//   />

// <div className="header__audio-control">
// <AudioController/>
// </div>