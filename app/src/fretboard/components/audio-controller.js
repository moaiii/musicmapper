import store from '../../../store';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {toggleAudio} from '../actions';
import FaVolumeOff from 'react-icons/lib/fa/volume-off';
import FaVolumeUp from 'react-icons/lib/fa/volume-up';
import ReactTooltip from 'react-tooltip';

class AudioController extends Component {

  constructor () {
    super();

    this.state = {
      volume: 1,
      isMuted: true
    };
  }

  _handleClick () {
    store.dispatch(toggleAudio());
  }

  /**
   * Update volume
   * @param {Number} sliderValue between 0 - 100
   * @returns {void}
   * * */
  _updateSlider = (sliderValue) => {
    this.setState({
      volume: sliderValue
    });
  };

  /**
   * Intermediate function on mouse up on slider
   * to release volume update to the player api
   * @private
   * @returns {void}
   * * */
  _updateVolume = () => {
    if(this.state.volume === 0) {
      this._handleMute();
    }

    this._sendFullStatus();
  };

  /**
   * On mouse down (start) check if it was currently muted
   * If so, un-mute
   * @private
   * @returns {void}
   * * */
  _checkWasMuted = () => {
    if(this.state.isMuted) {
      this.setState({
        volume: 1
      }, () => {
        this._handleMute();
      });
    }
  };

  /**
   * Intermediate function to set volume to zero
   * Stores previous volume level to allow toggle functionality
   * @private
   * @returns {void}
   * * */
  _handleMute = () => {
    if(!this.state.isMuted) {
      this._updateSlider(0);
      this.setState({
        previousVolume: this.state.volume,
        isMuted: true
      });
    } else {
      this.setState({
        isMuted: false,
        volume: this.state.previousVolume
      });
    }

    this._sendFullStatus();
  };

  render () {
    return(
      <div className="audio-controller"
        data-tip data-for='tooltip__audio-control'>
        <p className="audio-controller__status">
          {this.props.audioEnabled ? "Note On" : "Note Off"}
        </p>

        <div className="icon__container icon__container--audio-control"
          onClick={this._handleClick.bind(this)}>
          {this.props.audioEnabled ?
            <FaVolumeUp className="icon volume"/> :
            <FaVolumeOff className="icon volume"/>}
        </div>

        <ReactTooltip
          id='tooltip__audio-control'
          place="bottom"
          type="success"
          effect="solid"
          disable={!this.props.tooltipIsOn}>
          <p>Turn on if you want to hear</p>
          <p>the tone of each fret you select</p>
        </ReactTooltip>
      </div>
    );
  }
}

AudioController.propTypes = {
  audioEnabled: PropTypes.bool,
  tooltipIsOn: PropTypes.bool
};

const mapStoreToProps = (store) => {
  return {
    audioEnabled: store.fretboardState.audioEnabled,
    tooltipIsOn: store.generalState.tooltipIsOn
  };
};

export default connect(mapStoreToProps)(AudioController);
