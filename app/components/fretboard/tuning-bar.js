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