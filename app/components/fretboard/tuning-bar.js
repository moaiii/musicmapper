import AudioController from './audio-controller';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import Tuning from '../fretboard/tuning';


class TuningBar extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="fretboard__container">
        <div className="fretboard__header">
          <div className="header__tuning">
            <h1 className="tuning__title">Tuning</h1>
            <Tuning/>
            <div className="tuning__notes-container">
              {this.props.tuningSelection
                .map((note: string, index: number) =>
                  <h4 key={`tuning-note-${index}`} 
                      className="tuning__note">
                      {note}
                  </h4>
              )}
            </div>
          </div>
          <AudioController />
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    tuningSelection: store.fretboardState.tuning,
  };
};

export default connect(mapStoreToProps)(TuningBar);