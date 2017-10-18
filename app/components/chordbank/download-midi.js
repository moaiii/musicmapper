import {connect} from 'react-redux';
import React, {Component} from 'react';
import store from '../../store';
import {clearAllNotes} from '../../actions/chordbank-actions';
import {clearSelection} from '../../actions/keyboard-actions';
import {deleteAllSelected} from '../../actions/fretboard-actions';
import * as midiApi  from '../../api/midi-api';
import {ProgressDownloadingText, ErrorDownloadingText} from '../../data/modal-text';
import _ from 'lodash';

//child components
import PossibleChords from './possible-chords';
import FaDownload from 'react-icons/lib/fa/download';
import FaBan from 'react-icons/lib/fa/ban';
import Modal from '../layout/partials/modal';
import ReactTooltip from 'react-tooltip';


class DownloadMidi extends Component {

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

  
  _clearNotes() {
    store.dispatch(clearAllNotes());
    store.dispatch(clearSelection());
    store.dispatch(deleteAllSelected());
  };


  /**
   * 
   * @param {event} e 
   */
  _downloadMidi(e) {
    this._showDownloading();
    
    let midi_type = e.currentTarget.getAttribute('data-download'); 
    
    // MIDI-SCALES
    if(midi_type === "scales") {
      
      let scale_name = `${this.props.selectedScale.name}`;
      let scale_notes = `${this.props.selectedScale.notes}`;
      debugger;
      
      this.callMidiApi(scale_notes, scale_name, midi_type);

    // MIDI-CHORD
    } else if (midi_type === "chord") {

      let chord_name = this.props.selectedChord;
      let chord_notes = JSON
        .stringify(_.concat(this.props.notes, this.props.differenceNotes));

      this.callMidiApi(chord_notes, chord_name, midi_type);

    } else {
      console.error("Error cannot send data for file download!");
    } 
  }; 


  /**
   * 
   * @param {string} notes 
   * @param {string} name 
   * @param {string} midi_type 
   */
  callMidiApi(notes, name, midi_type) {
    midiApi.generateMidi(notes, name, midi_type)
    .then((response) => {
      this._hideDownloading();

      let downloadLink = JSON.parse(response.data.body)["download-link"];

      if (downloadLink !== undefined) {
        this.setState({
          downloadLink: downloadLink
  
        }, () => {
          window.open(this.state.downloadLink);
        });
      };
    })
    .catch((error) => {
      this._hideDownloading();
      this._showError();
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

        <div className="button-bar">
          <div className="button-bar --downloads"
               data-tip data-for='tooltip__download-chord'>     
            <button className="chordbank__button --chord"
                    data-download="chord"
                    disabled={this.props.selectedChord === "" ? true : false}
                    onClick={this._downloadMidi.bind(this)}>
              <FaDownload
                className="icon"/>
              <p>MIDI Chord</p>
            </button>
            <button className="chordbank__button --scale"
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
    selectedScale: store.chordbankState.selectedScale,
    modeScales: store.chordbankState.modeScales,
    differenceNotes: store.keyboardState.differenceNotes,
    tooltipIsOn: store.generalState.tooltipIsOn
  };
};

export default connect(mapStoreToProps)(DownloadMidi);