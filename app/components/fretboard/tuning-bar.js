// functional components
import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import * as generalAction from '../../actions/general-actions';

// child components
import AudioController from './audio-controller';
import Tuning from '../fretboard/tuning';
import ToggleButton from 'react-toggle-button';


class TuningBar extends Component {

  constructor() {
    super();

    this.state = {
      tooltipIsOn: false
    };

    this.toggleTooltip = this.toggleTooltip.bind(this)
  }

  toggleTooltip() {
    this.setState({
      tooltipIsOn: !this.state.tooltipIsOn
    }, () => {
      this.state.tooltipIsOn ? 
        store.dispatch(generalAction.tooltipOn()) :
        store.dispatch(generalAction.tooltipOff())
    });
  };

  render() {
    let toggle =
      <ToggleButton
        inactiveLabel={'OFF'}
        activeLabel={'ON'}
        value={this.state.tooltipIsOn || false}
        onToggle={this.toggleTooltip} />
        
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
          <div className="app__misc">
            <h1>Control</h1>
            <div className="how-to-use">
              <p>Tooltips</p>
              {toggle}
            </div>
            <AudioController />
          </div>
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