import {connect} from 'react-redux';
import React, {Component} from 'react';
import Checkbox from 'rc-checkbox';
import store from '../../../store';
import {toggleLaptopKeyboardKeys} from '../../keyboard/actions';

// child components
import ToggleButton from 'react-toggle-button';
import ReactTooltip from 'react-tooltip';

class LaptopChecked extends Component {

  constructor() {
    super();

    this.state = {
      disabled: false
    };
  }

  _toggleLaptopKeyboardKeys() {
    this.setState({
      disabled: !this.state.disabled
    }, () => {
      store.dispatch(toggleLaptopKeyboardKeys(this.state.disabled));
    });
  }

  render() {
    return (
      <div className="laptop-check__container"
        data-tip data-for='tooltip__laptop-notes'>
        <p>Show laptop keyboard notes</p>
        <ToggleButton
          value={ this.state.disabled || false }
          onToggle={this._toggleLaptopKeyboardKeys.bind(this)} />

        <ReactTooltip 
          id='tooltip__laptop-notes' 
          place="top" 
          type="success" 
          effect="solid"
          disable={!this.props.tooltipIsOn}>
          <p>Show the keyboard as it appears on your laptop </p> 
          <p>for quick use in your DAW</p>
        </ReactTooltip>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    showLaptopKeys: store.keyboardState.showLaptopKeys,
    tooltipIsOn: store.generalState.tooltipIsOn
  };
};

export default connect(mapStoreToProps)(LaptopChecked);