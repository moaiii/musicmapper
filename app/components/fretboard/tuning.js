// functional componenets
import Dropdown from 'react-dropdown'
import React, {Component} from 'react';
import store from '../../store';
import {connect} from 'react-redux';
import {TuningChangeText} from '../../data/modal-text';
import {deleteAllSelected, changeTuning, calculateFretboardNotes} from "../../actions/fretboard-actions"
import {clearAllNotes} from '../../actions/chordbank-actions';
import {clearSelection} from '../../actions/keyboard-actions';

//child components
import ReactTooltip from 'react-tooltip';
import tunings from '../../data/tunings';
import Modal from '../layout/partials/modal';


class Tuning extends Component {

  constructor() {
    super();

    this.state = {
      showConfirmationModal: false,
      newTuning: 'STANDARD',
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

  _showConfirmationModal(e: SyntheticEvent<>) {
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
    });
  }

  _onRejectHandler() {
    this.setState({ showConfirmationModal: false })
  }

  render() {

    let all_tunings = tunings.map(tuning => tuning.name);

    let tunings_dropdown = 
      <Dropdown options = {all_tunings}
        onChange = {this._showConfirmationModal.bind(this)}
        value = {this.state.newTuning}
        placeholder = "Select a tuning" />

    let tunings_modal = 
      <Modal 
        {...TuningChangeText}
        isVisible = {this.state.showConfirmationModal}
        onReject = {this._onRejectHandler}
        onConfirm = {this._onConfirmHandler} />
        
    return (
      <div className="tuning-selector"
           data-tip data-for='tooltip__tuning-selector'>
        {tunings_dropdown}
        {tunings_modal}

        <ReactTooltip 
          id='tooltip__tuning-selector' 
          place="bottom" 
          type="success" 
          effect="solid"
          disable={!this.props.tooltipIsOn}>
          <p>Start here - Pick from a wide range of common tunings</p> 
          <p>This will overwrite any fret data you have already input</p>
        </ReactTooltip>
      </div>
    );
  }
};

const mapStoreToProps = (store) => {
  return {
    tooltipIsOn: store.generalState.tooltipIsOn
  };
};

export default Tuning;
