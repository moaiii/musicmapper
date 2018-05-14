import {connect} from 'react-redux';
import {Component} from 'react';
import store from '../../../store';
import {clearAllNotes} from '../../chordbank/actions';
import {clearSelection} from '../../keyboard/actions';
import {deleteAllSelected} from '../../fretboard/actions';
import * as midiApi  from '../api';
import {ProgressDownloadingText, ErrorDownloadingText} from '../../../data/modal-text';
import _ from 'lodash';

//child components
import PossibleChords from './possible-chords';
import FaDownload from 'react-icons/lib/fa/download';
import FaBan from 'react-icons/lib/fa/ban';
import Modal from '../../main/components/modal';
import ReactTooltip from 'react-tooltip';

export class ChordBank extends Component {

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
   * @param {event} e
   */
  _downloadMidi(e) {
    this._showDownloading();

    let midi_type = e.currentTarget.getAttribute('data-download');

    if(midi_type === "scales") {

      let scales_name = `${this.props.selectedChord}-modes`;
      let scale_notes = {notes: JSON.stringify(this.props.modeScales[0])};

      this.callMidiApi(scale_notes, scales_name, midi_type);

    } else if (midi_type === "chord") {

      let chord_name = this.props.selectedChord;
      let chord_notes = JSON
        .stringify(_.concat(this.props.notes, this.props.differenceNotes));

      this.callMidiApi(chord_notes, chord_name, midi_type);

    } else {
      // console.error("Error cannot send data for file download!");
    }
  }

  /**
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
        <div className="chordbank__data">
          <h4 className="chordbank__header">
            Fretboard Notes
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
          <div className="chordbank__difference-notes">
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
          <button className="chordbank__button --clear"
            id={`clear-button`}
            onClick={this._clearNotes.bind(this)}>
            <FaBan
              className="icon"/>
            <p>Clear</p>
          </button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    notes: store.chordbankState.activeNotes,
    selectedChord: store.chordbankState.selectedChord,
    modeScales: store.chordbankState.modeScales,
    differenceNotes: store.keyboardState.differenceNotes,
    tooltipIsOn: store.generalState.tooltipIsOn
  };
};

export default connect(mapStoreToProps)(ChordBank);
