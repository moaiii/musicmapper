import React, {Component} from 'react';
import Fret from './fret';


class String extends Component {

  constructor() {
    super();
    this.state = {};
  }

  /**
   * Initialise
   */
  componentDidMount() {}

  render() {
    let frets = [];

    if(this.props.notes !== undefined) {
      frets = this.props.notes.map((note, index) =>
        <Fret
          className="string__fret"
          key={'F-' + this.props.id + '-' + index}
          // selected={note.selected}
          // note={note.note}
          guide={this.props.guide}
          isRoot={index === 0}
          index={{
              string_index: this.props.string_index,
              fret_index: index
            }}
        />);
    }

    return (
      <div className="string">
        {frets}
      </div>
    );
  }
}


export default String;
