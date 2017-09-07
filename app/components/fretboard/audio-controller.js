import store from '../../store';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import ReactSVG from 'react-svg'
import {toggleAudio} from '../../actions/fretboard-actions';
import Slider from 'react-rangeslider';


class AudioController extends Component {

  constructor() {
    super();

    this.state = {
      volume: 0.5
    };
  };

  componentDidMount() {};

  _handleClick() {
    store.dispatch(toggleAudio());
  }

  /**
   * Update volume
   * @param {Number} volume between 0 - 100
   * * */
  _updateSlider = (sliderValue) => {
    this.setState({
      volume: sliderValue
    });
  };

  /**
   * Intermediate function on mouse up on slider
   * to release volume update to the player api
   * * */
  _updateVolume = () => {
    if(this.state.volume === 0) {
      this._handleMute();
    }

    this._sendFullStatus()
  };


  /**
   * On mouse down (start) check if it was currently muted
   * If so, un-mute
   * @private
   */
  _checkWasMuted = () => {
    if(this.state.isMuted) {
      this.setState({
        volume: 1
      }, () => {
        this._handleMute();
      })
    }
  };

  /**
   * Intermediate function to set volume to zero
   * Stores previous volume level to allow toggle functionality
   * @private
   */
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
      <div className="audio-controller">
        <p className="audio-controller__status">
          {this.props.audioEnabled ? "Tuning note On" : "Tuning note Off"}
        </p>

        <div className="icon__container icon__container--audio-control"
             onClick={this._handleClick.bind(this, "facebook")}>
          <ReactSVG
            path={this.props.audioEnabled ? "./svg/volume-on.svg" : "./svg/volume-off.svg"}
            className="icon"
            style={{ width: 30, height: 30, display: 'inline-block' }}/>
        </div>

        <div className="slider">
          <Slider
            min={0}
            max={100}
            tooltip={false}
            value={this.state.volume}
            onChangeStart={this._checkWasMuted}
            onChange={this._updateSlider}
            onChangeComplete={this._updateVolume}/>
        </div>
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
  return {
    audioEnabled: store.fretboardState.audioEnabled
  };
};

export default connect(mapStoreToProps)(AudioController);