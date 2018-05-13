import React, {Component} from 'react';
import store from '../../../store';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Fret extends Component {

  constructor() {
    super();
  }

  handleClick = () => { 
    this.props.handleClick();
  }

  render() {
    let { note, isRoot, guide, fretIndex, number } = this.props;

    let selectedModifier = note.selected ? ' selected' : '';
    let rootModifier = isRoot ? ' root' : '';
    let guideModifier = guide ? ' guide' : '';
    let classModifier = `${selectedModifier}${rootModifier}${guideModifier}`;

    let fretName = guide ? number : note.note;

    return (
      <div className={`string__fret ${classModifier}`}
        id={`fret-${fretIndex}`}
        onClick={() => this.handleClick()}>
        <p className="fret__name">
          {fretName}
        </p>
      </div>
    );
  }
};

Fret.propTypes = {
  note: PropTypes.object,
  handleFretClick: PropTypes.func
};

export default Fret;