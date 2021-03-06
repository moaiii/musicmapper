import {connect} from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from '../../../store';
import {toggleExactMatching, setSelectedChordName, populateAllScales} from '../actions';
import {clearSelection, highlightSelection} from '../../keyboard/actions';
import ReactTooltip from 'react-tooltip';
import ToggleButton from 'react-toggle-button';

class PossibleChords extends Component {
  constructor () {
    super();

    this.state = {
      selectors: [],
      isExactMatch: false
    };
  }

  onToggle () {
    this.setState({
      isExactMatch: !this.state.isExactMatch
    }, () => {
      store.dispatch(toggleExactMatching(this.state.isExactMatch));
    });
  }

  _handleChordSelection (e) {
    store.dispatch(clearSelection());
    store.dispatch(highlightSelection({
      "notes": e.notes,
      "difference": e.difference
    }));
    store.dispatch(setSelectedChordName(e.name));
    store.dispatch(populateAllScales());
  }

  render () {

    let toggle =
      <ToggleButton
        className={`chord-match__toggle`}
        inactiveLabel={'OFF'}
        activeLabel={'ON'}
        value={ this.state.isExactMatch || false }
        onToggle={this.onToggle.bind(this)} />;

    let possibleChords = this.props.possibleChords.map((chord, index) =>
      <div className={"chord-match" + (this.props.selected === chord.name ? " chord-match--selected" : "")}
        id={`chord-match-${index}`}
        key={`poss-chord-${index}`}
        onClick={this._handleChordSelection.bind(this, chord)}>
        <p className="chord-match__name">
          {chord.name}
        </p>
        <div className="chord-match__notes">
          {chord.notes.map((note, i) =>
            <p key={`pcn-${index}-${i}`}>
              {note}
            </p>
          )}
        </div>
      </div>
    );

    let exactChords = this.props.exactChords.map((chord, index) =>
      <div className={"chord-match" + (this.props.selected === chord.name ? " chord-match--selected" : "")}
        key={`exact-chord-${index}`}
        onClick={this._handleChordSelection.bind(this, chord)}>
        <p className="chord-match__name">
          {chord.name}
        </p>
        <div className="chord-match__notes">
          {chord.notes.map((note, i) =>
            <p key={`ecn-${index}-${i}`}>
              {note}
            </p>
          )}
        </div>
      </div>
    );

    return(
      <div className="chords__container">
        <div className="chords__match-toggle"
          data-tip data-for='tooltip__match-toggle'>
          <h4>Chord match</h4>
          {toggle}
        </div>
        <div className="chords__list"
          data-tip data-for='tooltip__chords__list'>
          {this.props.isShowingExactChordMatches ? exactChords : possibleChords}
        </div>

        <ReactTooltip
          id='tooltip__chords__list'
          place="left"
          type="success"
          effect="solid"
          disable={!this.props.tooltipIsOn}>
          <p>All chords containing the notes you
            have selected on the fretboard</p>
          <p>will show here - select one to show
            its shape in the keyboard</p>
        </ReactTooltip>

        <ReactTooltip
          id='tooltip__match-toggle'
          place="left"
          type="success"
          effect="solid"
          disable={!this.props.tooltipIsOn}>
          <p>Show only the chords that match the exact notes you select</p>
        </ReactTooltip>
      </div>
    );
  }
}

PossibleChords.propTypes = {
  isShowingExactChordMatches: PropTypes.bool,
  possibleChords: PropTypes.array,
  exactChords: PropTypes.array,
  selected: PropTypes.string,
  tooltipIsOn: PropTypes.bool
};

const mapStoreToProps = (store) => {
  return {
    isShowingExactChordMatches: store.chordbankState.isShowingExactChordMatches,
    possibleChords: store.chordbankState.possibleChords,
    exactChords: store.chordbankState.exactChords,
    selected: store.chordbankState.selectedChord,
    tooltipIsOn: store.generalState.tooltipIsOn
  };
};

export default connect(mapStoreToProps)(PossibleChords);
