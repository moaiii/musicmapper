import Dropdown from 'react-dropdown'
import React, {Component} from 'react';
import store from '../../store';
import tunings from '../../data/tunings';
import Modal from '../layout/partials/modal';
import {deleteAllSelected, changeTuning, calculateFretboardNotes} from "../../actions/fretboard-actions"
import {clearAllNotes} from '../../actions/chordbank-actions';
import {clearSelection} from '../../actions/keyboard-actions';


class Tuning extends Component {

  constructor() {
    super();

    this.state = {
      showConfirmationModal: false,
      newTuning: null,
      oldTuning: 'STANDARD'
    };

    this._onConfirmHandler = this._onConfirmHandler.bind(this);
    this._onRejectHandler = this._onRejectHandler.bind(this);
  }

  /**
   * Initialise
   */
  componentDidMount() {}

  changeTuning() {
    store.dispatch(changeTuning(this.state.newTuning));
    store.dispatch(calculateFretboardNotes());
    store.dispatch(clearAllNotes()); // chord bank
    store.dispatch(deleteAllSelected()); // fretboard
    store.dispatch(clearSelection()); // keyboard

  }

  _showConfirmationModal(e) {
    this.setState({
      showConfirmationModal: true,
      newTuning: e.value
    });
  }

  _onConfirmHandler() {
    let self = this;
    this.setState({
        showConfirmationModal: false
    }, () => {
      self.changeTuning();
    })
  }

  _onRejectHandler() {
    this.setState({ showConfirmationModal: false })
  }

  /**
   * Render component
   * @returns {XML}
   */
  render() {

    let all_tunings = tunings.map(tuning => tuning.name);

    return (
      <div className="tuning-selector">
        <Dropdown options={all_tunings}
                  onChange={this._showConfirmationModal.bind(this)}
                  value={this.state.newTuning}
                  placeholder="Select a tuning" />

        <Modal
          isVisible={this.state.showConfirmationModal}
          title={"Change tuning"}
          message={`Confrim change of tuning to ${this.state.newTuning}?
            This will overwrite any previous chord data.`}
          onConfirm={this._onConfirmHandler}
          onReject={this._onRejectHandler}
        />
      </div>
    );
  }
}


export default Tuning;
