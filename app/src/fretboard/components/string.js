import React, {Component} from 'react';
import Fret from './fret';
import PropTypes from 'prop-types';


class String extends Component {

  constructor() {
    super();
  }
  
  render() {
    let fretElements = [];

    if(this.props.notes !== undefined) {
      fretElements = this.props.notes.map((note, index) =>
        <Fret
          key={'F-' + this.props.id + '-' + index}
          isRoot={index === 0}
          number={index}
          guide={this.props.guide}
          handleClick={() => 
              this.props.handleClick(this.props.stringNumber, index)}
          note={note}
        />);
    }

    return (
      <div className='fretboard__string'>
        {fretElements}
      </div>
    );
  }
}

String.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
  guide: PropTypes.bool,
  string_index: PropTypes.number,
  guide: PropTypes.bool
}


export default String;
