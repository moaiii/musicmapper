// functional componenets
import Dropdown from 'react-dropdown'
import React, {Component} from 'react';
import store from '../../store';
import {connect} from 'react-redux';
import * as chordbankAction from "../../actions/fretboard-actions";

//child components
import ReactTooltip from 'react-tooltip';


class ScaleSelect extends Component {

  constructor() {
    super();

    this.state = {
      newScale: '',
      oldScale: ''
    };
  }

  changeScale() {
    this.setState({ 

    }, () => {
      store.dispatch(chordbankAction.setSelectedScale(this.state.selectedScaleIndex));
    });
  }

  render() {

    let scale_options = this.props.modes !== undefined ? this.props.modes.map(scale => {
      return `${scale.root} - ${scale.mode}`;
    }) : null;

    let scaleSelectDropdown = 
      <Dropdown 
        options = {scale_options}
        onChange = {this.changeScale.bind(this)}
        value = {this.state.newScale}
        placeholder = "Select a scale" />

        
    return (
      <div className="scales-selector"
           data-tip data-for='tooltip__scales-selector'>
        {scaleSelectDropdown}

        <ReactTooltip 
          id='tooltip__scales-selector' 
          place="top" 
          type="success" 
          effect="solid"
          disable={!this.props.tooltipIsOn}>
          <p>Here you can see all possible scales</p> 
          <p>associated with your selected chord.</p>
        </ReactTooltip>
      </div>
    );
  }
};

const mapStoreToProps = (store) => {
  console.log("SCALES: ", store.chordbankState.modeScales);
  return {
    modes: store.chordbankState.modeScales
  };
};

export default ScaleSelect;
