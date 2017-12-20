import React, {Component} from 'react';

import store from '../../../store';
import {MobileWarningText} from '../../../data/modal-text';
import {changeTuning, calculateFretboardNotes} from '../../fretboard/actions';
import ChordBank from '../../chordbank/components/chord-bank';
import PossibleChords from '../../chordbank/components/possible-chords';
import DownloadMidi from '../../chordbank/components/download-midi';
import ChordSelector from '../../chordbank/components/chord-selector';
import Fretboard from '../../fretboard/components/fretboard';
import TuningBar from '../../fretboard/components/tuning-bar';
import Keyboard from '../../keyboard/components/keyboard';
import LaptopCheck from '../../keyboard/components/laptop-check';
import ScaleSelect from '../../keyboard/components/scale-select';
import Modal from './modal';
import Share from './share';
import Header from './header';
import Footer from './footer';
import '../../../../public/';


class LayoutMain extends Component {

  constructor() {
    super();

    this.state = {
      showMobileWarning: false,
      showHowToUse: false
    };

    this._onConfirmHandler = this._onConfirmHandler.bind(this);
    this._onRejectHandler = this._onRejectHandler.bind(this);
  }

  componentDidMount() {
    store.dispatch(changeTuning("STANDARD"));
    store.dispatch(calculateFretboardNotes());
  };

  _onConfirmHandler() {}

  _onRejectHandler() {}

  render() {

    let ModalWarning =
      <Modal 
        {...MobileWarningText}
        isVisible = {this.state.showConfirmationModal}
        onReject = {this._onRejectHandler}
        onConfirm = {this._onConfirmHandler} />

    return(
      <div className="app">
        <div className="app__mobile-landscape-notification">
          <h1>Please orientate your device</h1>
          <p>This app is viewed best in landscape mode</p>
        </div>
        <div className="app__container">
          <Header />
          <TuningBar />
          <div className="container__all">
              <div className="container__center">
                <div className="fretboard__container--main">
                  <h1>Fretboard</h1>
                  <Fretboard />
                </div>
                <div className="keyboard__container">
                  <h1 className="keyboard__title">Keyboard</h1>
                  <div className="keyboard__controller">
                    <LaptopCheck />
                    <ScaleSelect />
                  </div>
                  <div className="keyboards">
                    <div className="keyboards__chord">
                      <h2>Chord</h2>
                      <Keyboard type="chord"/>
                    </div>
                    <div className="keyboards__scale">
                      <h2>Scale</h2>
                      <Keyboard type="scale"/>
                    </div>
                  </div>
                </div>
              </div>
            <div className="container__right">
              <div className="right--verticals">
                <div className="container__options">
                  <h1 className="options__title">Options</h1>
                  <PossibleChords />
                </div>
                <div className="container__choice">
                  <h1 className="choice__title">Choice</h1>
                  <ChordBank />
                </div>
              </div>
              <div className="right--horizontal">
                <div className="container__download">
                  <h1 className="choice__title">Download Midi</h1>
                  <DownloadMidi />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LayoutMain;