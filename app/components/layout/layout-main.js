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
import '../../../stylesheets/main.scss';


class LayoutMain extends Component {

  constructor() {
    super();

    this.state = {
      showMobileWarning: false
    };
  }

  componentDidMount() {};

  render() {

    let mobileWarning =
      <Modal
        isVisible={this.state.showMobileWarning}
        // buttonsVisable={false}
        title={"Mobile view"}
        message={`It looks like your using the Music Mapper on a mobile device.
                  For the best user experience please open on a desktop or wide screen tablet.`}
        onConfirm={this._onConfirmHandler}
        onReject={this._onRejectHandler}
      />

    return(
      <div className="app__container">
        <Header/>
        <Share/>
        <Fretboard/>
        {/*<ChordSelector/>*/}
        <div className="chordbank__container">
          <ChordBank/>
          <PossibleChords/>
        </div>
        <div className="keyboard__container--layoutmain">
          <LaptopCheck/>
          <Keyboard/>
        </div>
        {mobileWarning}
        <Footer/>
      </div>
    );
  }
}

export default LayoutMain;