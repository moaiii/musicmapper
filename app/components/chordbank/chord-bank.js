import {connect} from 'react-redux';
import React, {Component} from 'react';
import store from '../../store';
import {clearAllNotes} from '../../actions/chordbank-actions';
import {clearSelection} from '../../actions/keyboard-actions';
import {deleteAllSelected} from '../../actions/fretboard-actions';
import {generateMidi} from '../../api/midi-api';
import {ProgressDownloadingText, ErrorDownloadingText} from '../../data/modal-text';
import _ from 'lodash';

//child components
import PossibleChords from './possible-chords';
import FaDownload from 'react-icons/lib/fa/download';
import FaBan from 'react-icons/lib/fa/ban';
import Modal from '../layout/partials/modal';
import ReactTooltip from 'react-tooltip';


class ChordBank extends Component {

  constructor() {
    super();

    this.state = {
      downloadLink: "",
      showDownloading: false,
      showError: false
    };
  }

  _showDownloading() {
    this.setState({ showDownloading: true })
  }

  _hideDownloading() {
    this.setState({ showDownloading: false })
  }

  _showError() {
    this.setState({ showError: true })
  }

  _hideError() {
    this.setState({ showError: false })
  }

  
  componentDidMount() {};


  _clearNotes() {
    store.dispatch(clearAllNotes());
    store.dispatch(clearSelection());
    store.dispatch(deleteAllSelected());
  };


  _downloadMidi(e) {
    let self = this;
    let type = e.currentTarget.getAttribute('data-download'); 
    self._showDownloading();

    generateMidi({
      notes: this.props.notes, 
      diff: this.props.differenceNotes, 
      type: type,
      chordName: this.props.selectedChord
    
    }).then((response) => {

      self._hideDownloading();

      this.setState({
        downloadLink: JSON.parse(response.data.body)["download-link"]

      }, () => {
        window.open(this.state.downloadLink);
      });

    }).catch((error) => {
      self._hideDownloading();
      self._showError();
      console.log('Error in chord bank: ', error);
    });
  };


  render() {
    let progressDownloadModal =
      <Modal 
        {...ProgressDownloadingText}
        isVisible = {this.state.showDownloading}
        onReject = {this._hideDownloading.bind(this)}
        onConfirm = {this._hideDownloading.bind(this)} />

    let errorDownloadModal =
        <Modal 
          {...ErrorDownloadingText}
          isVisible = {this.state.showError}
          onReject = {this._hideError.bind(this)}
          onConfirm = {this._hideError.bind(this)} />

        
    return(
      <div className="chordbank">
        {progressDownloadModal}
        {errorDownloadModal}
        <div className="chordbank__data">
          <h4 className="chordbank__header">
            Selected Notes
          </h4>
          <div className="chordbank__active-notes">
            {this.props.notes.map((note, index) =>
              <p key={`Sel-Note-${index}`}>
                {note}
              </p>
            )}
          </div>
        </div>

        <div className="chordbank__data">
          <h4 className="chordbank__header">
            Selected Chord
          </h4>
          <div className="chordbank__selected-chord">
            <p>{this.props.selectedChord}</p>
          </div>
        </div>

        <div className="chordbank__data">
          <h4 className="chordbank__header"
              data-tip data-for='tooltip__difference'>
            Difference
          </h4>
          <div className="chordbank__active-notes">
            {this.props.differenceNotes.map((note, index) =>
              <p key={`Dif-Note-${index}`}>
                {note}
              </p>
            )}
          </div>
          
          <ReactTooltip 
            id='tooltip__difference' 
            place="right" type="success" effect="solid" disable={!this.props.tooltipIsOn}>
            <p>This shows the notes in your selected chord which are</p> 
            <p>missing from the frets you selected, they will show on the</p>
            <p>keyboard in yellow</p>
          </ReactTooltip>
        </div>

        <div className="button-bar">
          <button className="chordbank__button"
                  onClick={this._clearNotes.bind(this)}>
            <FaBan
              className="icon"/>
            <p>Clear</p>
          </button>

          <div className="button-bar--downloads"
               data-tip data-for='tooltip__download-chord'>     
            <button className="chordbank__button"
                    data-download="chord"
                    disabled={this.props.selectedChord === "" ? true : false}
                    onClick={this._downloadMidi.bind(this)}>
              <FaDownload
                className="icon"/>
              <p>MIDI Chord</p>
            </button>

            
            <button className="chordbank__button"
              data-download="scales"
              disabled={this.props.selectedChord === "" ? true : false}
              onClick={this._downloadMidi.bind(this)}>
              <FaDownload
              className="icon"/>
              <p>MIDI Scales</p>
            </button>
          </div>
          
        </div>

        <ReactTooltip 
          id='tooltip__download-chord' 
          place="right" 
          type="success" 
          effect="solid" 
          disable={!this.props.tooltipIsOn}>
          <p>Once you have selected a chord from the right hand panel you can</p> 
          <p>download the midi files for the chord and its corresponding 7 scale modes </p>
          <p>for easy import into your DAW project, bypassing the keyboard completely!</p>
        </ReactTooltip>
      </div>
    )
  }
};

const mapStoreToProps = (store) => {
  return {
    notes: store.chordbankState.activeNotes,
    selectedChord: store.chordbankState.selectedChord,
    differenceNotes: store.keyboardState.differenceNotes,
    tooltipIsOn: store.generalState.tooltipIsOn
  };
};

export default connect(mapStoreToProps)(ChordBank);