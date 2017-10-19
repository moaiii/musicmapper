// functional componenets
import Dropdown from 'react-dropdown'
import React, {Component} from 'react';
import store from '../../store';
import {connect} from 'react-redux';
import * as chordbankAction from "../../actions/chordbank-actions";

//child components
import ReactTooltip from 'react-tooltip';


class ScaleSelect extends Component {

  constructor() {
    super();

    this.state = {
      selectedScale: '',
      selectedNotes: [],
      modes: []
    };
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      modes: nextProps.modes
    });
  };

  changeScale(e) {

    this.setState({ 
      selectedScale: e.value.replace(" ", "")
    }, () => {

      let split = this.state.selectedScale.split("-");
      let rootName = split[0];
      let modeName = split[1].replace(" ", "");
  
      let selectedNotes = this.props.modes
        .filter(scale => 
          scale.root === rootName && scale.mode === modeName);

      this.setState({
        selectedNotes: selectedNotes[0].notes
      }, () => {
        store.dispatch(chordbankAction
          .setSelectedScale(this.state.selectedNotes, this.state.selectedScale))
      })
    });
  };

  render() {
    let scale_options = this.state.modes.map(scale => `${scale.root} - ${scale.mode}`);

    let scaleSelectDropdown = 
      <Dropdown 
        options = {scale_options}
        onChange = {this.changeScale.bind(this)}
        value = {this.state.selectedScale}
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
  return {
    modes: store.chordbankState.modeScales
  };
};

export default connect(mapStoreToProps)(ScaleSelect);
