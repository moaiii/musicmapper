import {connect} from 'react-redux';
import React, {Component} from 'react';
import store from '../../../store';
import {clearAllNotes} from '../actions';
import {clearSelection} from '../../keyboard/actions';
import {deleteAllSelected} from '../../fretboard/actions';
import * as midiApi from '../api';
import {ProgressDownloadingText, ErrorDownloadingText} from '../../../data/modal-text';
import _ from 'lodash';

//child components
import PossibleChords from './possible-chords';
import FaDownload from 'react-icons/lib/fa/download';
import FaBan from 'react-icons/lib/fa/ban';
import Modal from '../../main/components/modal';
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
    this.setState({showDownloading: true});
  }

  _hideDownloading() {
    this.setState({showDownloading: false});
  }

  _showError() {
    this.setState({showError: true});
  }

  _hideError() {
    this.setState({showError: false});
  }


  _clearNotes() {
    store.dispatch(clearAllNotes());
    store.dispatch(clearSelection());
    store.dispatch(deleteAllSelected());
  }


  /**
   * Function to handle with click from the Download CHORD or Download SCALE
   * button - all params feed through same function dealt with differently in
   * AWS lambda function on the server side
   * @param {event} e
   */
  _downloadMidi(e) {
    // show the UI user feedback modal to show the download is being preped
    this._showDownloading();
    // Differentiate between scales or chords
    let midi_type = e.currentTarget.getAttribute('data-download');

    /**
     *  MIDI-SCALES
     */
    if(midi_type === "scales") {
      // catch any blank spaces and replace with nothing i.e. delete
      let scale_name = `${this.props.selectedScale.name.replace(" ", "")}`;
      // scales are coming in here as a string - chords as an array
      // due to the way they are dealt with in the store so need to stringify here
      let scale_notes = `${this.props.selectedScale.notes}`;
      // send the data to the API gateway end point for file download
      this.callMidiApi(scale_notes, scale_name, midi_type);

    /**
     *  MIDI-CHORD
     */
    } else if (midi_type === "chord") {
      // catch any blank spaces and replace with nothing i.e. delete
      let chord_name = this.props.selectedChord.replace(" ", "");
      // Turn the concatenated array to a string for sending to the AWS endpoint
      let chord_notes = JSON
        .stringify(_.concat(this.props.notes, this.props.differenceNotes));
      // send the data to the API gateway end point for file download
      this.callMidiApi(chord_notes, chord_name, midi_type);

    // ERROR
    } else {
      // console.error("Error cannot send data for file download!");
    }
  }


  /**
   * Call the AWS API gateway end point and pass the params which were
   * satitised in the previous function. Using promises the response will be
   * handled and the file opened in a new window. The users browsers settings
   * may prevent this from happenening.
   * @param {string} notes
   * @param {string} name
   * @param {string} midi_type
   */
  callMidiApi(notes, name, midi_type) {
    // call the api funciton which hits the endpoint
    midiApi.generateMidi(notes, name, midi_type)
      .then((response) => {
        // hide the modal window alerting the user
        this._hideDownloading();
        // Lambda responds with S3 download link
        let downloadLink = JSON.parse(response.data.body)["download-link"];
        // store the download link in this component
        if (downloadLink !== undefined) {
          this.setState({
            downloadLink: downloadLink

          }, () => {
          // download the file in a new window - pop up may be blocked
            window.open(this.state.downloadLink);
          });
        }
      })
      .catch((error) => {
        this._hideDownloading();
        this._showError();
        // console.log('Error in chord bank: ', error);
      });
  }


  render() {
    let progressDownloadModal =
      <Modal
        {...ProgressDownloadingText}
        isVisible = {this.state.showDownloading}
        onReject = {this._hideDownloading.bind(this)}
        onConfirm = {this._hideDownloading.bind(this)} />;

    let errorDownloadModal =
        <Modal
          {...ErrorDownloadingText}
          isVisible = {this.state.showError}
          onReject = {this._hideError.bind(this)}
          onConfirm = {this._hideError.bind(this)} />;


    return(
      <div className="chordbank">
        {progressDownloadModal}
        {errorDownloadModal}

        <div className="button-bar">
          <div className="button-bar --downloads"
            data-tip data-for='tooltip__download-chord'>
            <button className="chordbank__button --chord"
              id={`button__download-chord`}
              data-download="chord"
              disabled={this.props.selectedChord === "" ? true : false}
              onClick={this._downloadMidi.bind(this)}>
              <FaDownload
                className="icon"/>
              <p>MIDI Chord</p>
            </button>
            <button className="chordbank__button --scale"
              id={`button__download-scale`}
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
          <p>Once you have selected a chord from the
            right hand panel you can</p>
          <p>download the midi files for the chord
            and its corresponding 7 scale modes </p>
          <p>for easy import into your DAW project,
            bypassing the keyboard completely!</p>
        </ReactTooltip>
      </div>
    );
  }
}

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
