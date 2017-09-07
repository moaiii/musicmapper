import { connect } from 'react-redux';
import React, {Component} from 'react';
import Key from './key';
import Utility from '../../utility/utility';


class Keyboard extends Component {

  constructor() {
    super();

    this.state = {};
  };

  componentDidMount() {}

  render() {

    let chromatic_data = Utility().getChromatic(1, "C");

    let keys = chromatic_data.chromatic.map((note, index) => {

      let key_class_mod = "";

      this.props.highlighted.map(highlighted_note => {
        if(note === highlighted_note) key_class_mod = "highlighted"
      });

      this.props.difference.map(difference_note => {
        if(note === difference_note) key_class_mod = "difference"
      });

      return (
       <Key
         key={'Key-' + index}
         note={note}
         showLaptopKey={this.props.showLaptopKeys}
         keyboard_note={chromatic_data.keyboard_chromatic[index]}
         key_class_mod={key_class_mod}
       />)
    });

    return (
      <div className="keyboard">
        {keys}
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    highlighted: store.keyboardState.highlightedNotes,
    difference: store.keyboardState.differenceNotes,
    showLaptopKeys: store.keyboardState.showLaptopKeys
  };
};

export default connect(mapStoreToProps)(Keyboard);