import React, {Component} from 'react';
import Fret from './fret';
import PropTypes from 'prop-types';

class String extends Component {

  constructor () {
    super();
  }

  render () {
    const {stringIndex, notes, guide, stringNumber, handleClick} = this.props;

    let fretElements = [];

    if(notes !== undefined) {
      fretElements = notes.map((note, index) =>
        <Fret
          fretIndex={`${stringIndex}-${index}`}
          key={`${index}-string`}
          isRoot={index === 0}
          number={index}
          guide={guide}
          handleClick={() => handleClick(stringNumber, index)}
          note={note}
        />);
    }

    return (
      <div className='fretboard__string'
        id={`string-${stringIndex}`}>
        {fretElements}
      </div>
    );
  }
}

String.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
  string_index: PropTypes.number,
  guide: PropTypes.bool,
  stringIndex: PropTypes.number,
  stringNumber: PropTypes.number,
  handleClick: PropTypes.func
};


export default String;
