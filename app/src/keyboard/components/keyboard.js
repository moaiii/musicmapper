import {connect} from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Utility from '../../../utilities/utility';

// child components
import Key from './key';
import ReactTooltip from 'react-tooltip';


class Keyboard extends Component {

  constructor () {
    super();

    this.state = {};
  }

  componentDidMount () {}

  render () {

    let chromatic_data = Utility().getChromatic(1, "C");

    let keys = chromatic_data.chromatic.map((note, index) => {

      let key_class_mod = "";

      if(this.props.type === "chord") {
        this.props.highlighted.map(highlighted_note => {
          if(note === highlighted_note) {
            key_class_mod = "highlighted";
          }
        });

        this.props.difference.map(difference_note => {
          if(note === difference_note) {
            key_class_mod = "difference";
          }
        });

      } else if (this.props.type === "scale") {
        if(this.props.selectedScaleNotes !== undefined ||
           this.props.selectedScaleNotes !== null) {

          if(this.props.selectedScaleNotes === "") {
            this.props.selectedScaleNotes
              .split(",")
              .map(highlighted_note => {
                if(note === highlighted_note) {
                  key_class_mod = "scale";
                }
              });
          } else {
            this.props.selectedScaleNotes
              .map(highlighted_note => {
                if(note === highlighted_note) {
                  key_class_mod = "scale";
                }
              });
          }
        }
      }


      return (
        <Key
          id={`key-${index}`}
          key={`Key-${index}`}
          note={note}
          showLaptopKey={this.props.showLaptopKeys}
          keyboard_note={chromatic_data.keyboard_chromatic[index]}
          key_class_mod={key_class_mod} />);
    });

    let tooltip__keyboard =
      <ReactTooltip
        id='tooltip__keyboard'
        place="top"
        type="success"
        effect="solid"
        disable={!this.props.tooltipIsOn}>
        <p>The notes of your selected chord from the
          right hand panel will show here.</p>
        <p>Any missing notes from your fret inputs will show in yellow.</p>
      </ReactTooltip>;

    return (
      <div className="keyboard"
        data-tip data-for='tooltip__keyboard'>
        {keys}
        {tooltip__keyboard}
      </div>
    );
  }
}

Keyboard.propTypes = {
  type: PropTypes.string,
  highlighted: PropTypes.array,
  difference: PropTypes.array,
  selectedScaleNotes: PropTypes.string,
  showLaptopKeys: PropTypes.bool,
  tooltipIsOn: PropTypes.bool
};

const mapStoreToProps = (store) => {
  return {
    highlighted: store.keyboardState.highlightedNotes,
    difference: store.keyboardState.differenceNotes,
    showLaptopKeys: store.keyboardState.showLaptopKeys,
    tooltipIsOn: store.generalState.tooltipIsOn,
    selectedScaleNotes: store.chordbankState.selectedScale.notes
  };
};

export default connect(mapStoreToProps)(Keyboard);
