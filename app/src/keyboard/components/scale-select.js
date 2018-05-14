// functional componenets
import Dropdown from 'react-dropdown';
import React, {Component} from 'react';
import store from '../../../store';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as chordbankAction from "../../chordbank/actions";

//child components
import ReactTooltip from 'react-tooltip';

class ScaleSelect extends Component {

  constructor () {
    super();

    this.state = {
      selectedScale: '',
      selectedNotes: [],
      allScales: []
    };
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    this.setState({
      allScales: nextProps.allPossibleScales
    });
  }

  changeScale = (e) => {
    const {selectedScale} = this.state;

    this.setState({
      selectedScale: e.value.replace(" ", "")
    }, () => {

      let split = selectedScale.split("-");
      let rootName = split[0];
      let modeName = split[1].replace(" ", "");

      let selectedNotes = this.props.allPossibleScales
        .filter(scale =>
          scale.root === rootName && scale.mode === modeName);

      this.setState({
        selectedNotes: selectedNotes[0].notes
      }, () => {
        store
          .dispatch(chordbankAction
            .setSelectedScale(selectedNotes, selectedScale));
      });
    });
  }

  render () {
    const {tooltipIsOn} = this.props;

    const {allScales, selectedScale} = this.state;

    let scale_options = allScales
      .map(scale => `${scale.root} - ${scale.mode}`);

    let scaleSelectDropdown =
      <Dropdown
        options = {scale_options}
        onChange = {this.changeScale}
        value = {selectedScale}
        placeholder = "Select a scale" />;


    return (
      <div className="scales-selector"
        data-tip data-for='tooltip__scales-selector'>
        {scaleSelectDropdown}

        <ReactTooltip
          id='tooltip__scales-selector'
          place="top"
          type="success"
          effect="solid"
          disable={!tooltipIsOn}>
          <p>Here you can see all possible scales</p>
          <p>associated with your selected chord.</p>
        </ReactTooltip>
      </div>
    );
  }
}

ScaleSelect.propTypes = {
  allPossibleScales: PropTypes.array,
  selectedNotes: PropTypes.array,
  selectedScale: PropTypes.array,
  tooltipIsOn: PropTypes.bool
};


const mapStoreToProps = (store) => {
  return {
    modes: store.chordbankState.modeScales,
    allPossibleScales: store.chordbankState.allPossibleScales
  };
};

export default connect(mapStoreToProps)(ScaleSelect);
