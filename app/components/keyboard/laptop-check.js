import { connect } from 'react-redux';
import React, {Component} from 'react';
import Checkbox from 'rc-checkbox';
import store from '../../store';
import {toggleLaptopKeyboardKeys} from '../../actions/keyboard-actions';
import ToggleButton from 'react-toggle-button'


class LaptopChecked extends Component {

  constructor() {
    super();

    this.state = {
      disabled: false
    };
  };

  _toggleLaptopKeyboardKeys() {
    this.setState({
      disabled: !this.state.disabled
    }, () => {
      store.dispatch(toggleLaptopKeyboardKeys(this.state.disabled))
    });
  };

  render() {
    return (
      <div className="laptop-check__container">
        <p>Show laptop keyboard notes</p>
        <ToggleButton
          value={ this.state.disabled || false }
          onToggle={this._toggleLaptopKeyboardKeys.bind(this)} />
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    showLaptopKeys: store.keyboardState.showLaptopKeys,
  };
};

export default connect(mapStoreToProps)(LaptopChecked);