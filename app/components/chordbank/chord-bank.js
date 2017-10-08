import {connect} from 'react-redux';
import React, {Component} from 'react';
import PossibleChords from './possible-chords';
import store from '../../store';
import {clearAllNotes} from '../../actions/chordbank-actions';
import {clearSelection} from '../../actions/keyboard-actions';
import {deleteAllSelected} from '../../actions/fretboard-actions';
import {generateMidi} from '../../api/midi-api';
import Modal from '../layout/partials/modal';
import {ProgressDownloadingText, ErrorDownloadingText} from '../../data/modal-text';
import FaBan from 'react-icons/lib/fa/ban';
import FaDownload from 'react-icons/lib/fa/download';
import _ from 'lodash';


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
          <h4 className="chordbank__header">
            Difference
          </h4>
          <div className="chordbank__active-notes">
            {this.props.differenceNotes.map((note, index) =>
              <p key={`Dif-Note-${index}`}>
                {note}
              </p>
            )}
          </div>
          
        </div>

        <div className="button-bar">
          <button className="chordbank__button"
                  onClick={this._clearNotes.bind(this)}>
            <FaBan
              className="icon"/>
            <p>Clear</p>
          </button>

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
    )
  }
};

const mapStoreToProps = (store) => {
  return {
    notes: store.chordbankState.activeNotes,
    selectedChord: store.chordbankState.selectedChord,
    differenceNotes: store.keyboardState.differenceNotes
  };
};

export default connect(mapStoreToProps)(ChordBank);