import AudioController from './audio-controller';
import React, {Component} from 'react';
import {changeTuning, calculateFretboardNotes} from "../../actions/fretboard-actions"
import {connect} from 'react-redux';
import String from './string';
import store from '../../store';
import Tuning from '../fretboard/tuning';
var _ = require('lodash');



class Fretboard extends Component {

  constructor() {
    super();

    this.state = {};

    store.subscribe(() => {});
  };

  componentDidMount() {
    store.dispatch(changeTuning("STANDARD"));
    store.dispatch(calculateFretboardNotes());
  }

  render() {

    let strings = this.props.fretboardNotes.map((notes, index) => {
      return(
        <String
          key={'S-' + index}
          className='fretboard__string'
          openNote={notes[0].note}
          notes={notes}
          guide={false}
          string_index={index}
        />);
    });


    let numberGuide =
      <String
        key={"guide-string"}
        guide={true}
        className='fretboard__guide-string'
      />

    return (
      <div className="fretboard__container">
        <div className="fretboard__header">
          <div className="header__tuning">
            <h4 className="tuning__title">Tuning</h4>
            <Tuning/>
            {this.props.tuningSelection.map((note, index) =>
              <h4 key={`tuning-note-${index}`} className="tuning__note">{note}</h4>
            )}
          </div>

          <div className="header__audio-control">
            <AudioController/>
          </div>
        </div>

        <div className="fretboard">
          {numberGuide}
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