import store from '../../store';
import {changeTuning, calculateFretboardNotes} from '../../actions/fretboard-actions';
import Footer from './partials/footer';
import Fretboard from '../fretboard/fretboard';
import Header from './partials/header';
import Keyboard from '../keyboard/keyboard';
import React, {Component} from 'react';
import ChordBank from '../chordbank/chord-bank';
import LaptopCheck from '../keyboard/laptop-check';
import PossibleChords from '../chordbank/possible-chords';
import Share from './partials/share';
import ChordSelector from '../chordbank/chord-selector';
import Modal from './partials/modal';
import {MobileWarningText} from '../../data/modal-text';
import '../../../stylesheets/main.scss';


// @Flow
type State = {
  showMobileWarning: boolean,
  showHowToUse: boolean
};

class LayoutMain extends Component<State> {

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
        <div className="app__container">
          <Header />
          <Share />
          <Fretboard />
          <div className="chordbank__container">
            <ChordBank />
            <PossibleChords />
          </div>
          <div className="keyboard__container--layoutmain">
            <LaptopCheck />
            <Keyboard />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LayoutMain;