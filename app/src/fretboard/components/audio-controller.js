import store from '../../../store';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import {toggleAudio} from '../actions';

// child components
import FaVolumeOff from 'react-icons/lib/fa/volume-off';
import FaVolumeUp from 'react-icons/lib/fa/volume-up';
import ReactTooltip from 'react-tooltip';


//@flow
type Props = {
  audioEnabled: boolean
};

type State = {
  volume: number,
  isMuted: boolean
};

class AudioController extends Component<Props, State> {

  constructor() {
    super();

    this.state = {
      volume: 1,
      isMuted: true
    };
  }

  _handleClick() {
    store.dispatch(toggleAudio());
  }

  /**
   * Update volume
   * @param {Number} sliderValue between 0 - 100
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
   * * */
  _handleMute = () => {
    if(!this.state.isMuted) {
      this.state.previousVolume = this.state.volume;
      this._updateSlider(0);
      this.setState({
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

  render(){
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

const mapStoreToProps = (store) => {
  return {
    audioEnabled: store.fretboardState.audioEnabled,
    tooltipIsOn: store.generalState.tooltipIsOn
  };
};

export default connect(mapStoreToProps)(AudioController);
