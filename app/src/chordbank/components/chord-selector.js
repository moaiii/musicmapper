import {connect} from 'react-redux';
import React, {Component} from 'react';


class ChordSelector extends Component {

  constructor() {
    super();

    this.state = {
      selectedOption: "option0"
    };
  };

  componentDidMount() {};

  _onChordChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
  }

  render() {

    let radioButtons = this.props.chordSelectors.map((selector, index) =>
      <div className="radio">
        <label>
          <input type="radio"
                 value={`option${index}`}
                 checked={this.state.selectedOption === `option${index}`}
                 onChange={this.handleOptionChange} />
          {!selector.name === undefined ? selector.name : `${index}`}
        </label>
      </div>
    );

    return(
      <div className="chordselectors__container">
        <form>
          {radioButtons}
        </form>
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
  return {
    chordSelectors: store.chordbankState.chordSelectors
  };
};

export default connect(mapStoreToProps)(ChordSelector);