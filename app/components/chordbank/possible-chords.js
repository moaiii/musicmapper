import {connect} from 'react-redux';
import React, {Component} from 'react';
import store from '../../store';
import {toggleExactMatching, setSelectedChordName} from '../../actions/chordbank-actions';
import {clearSelection, highlightSelection} from '../../actions/keyboard-actions';

// child components
import ReactTooltip from 'react-tooltip';
import ToggleButton from 'react-toggle-button';


class PossibleChords extends Component {

  constructor() {
    super();

    this.state = {
      selectors: [],
      isExactMatch: false
    };
  };

  componentDidMount() {};

  onToggle() {
    this.setState({
      isExactMatch: !this.state.isExactMatch
    }, () => {
      store.dispatch(toggleExactMatching(this.state.isExactMatch));
    });
  };

  _handleChordSelection(e) {
    console.log(e);
    store.dispatch(clearSelection());
    store.dispatch(highlightSelection({
      "notes": e.notes,
      "difference": e.difference
    }));
    store.dispatch(setSelectedChordName(e.name));
  };

  render(){

    let toggle =
      <ToggleButton
        inactiveLabel={'OFF'}
        activeLabel={'ON'}
        value={ this.state.isExactMatch || false }
        onToggle={this.onToggle.bind(this)} />

    let possibleChords = this.props.possibleChords.map((chord, index) =>
      <div className={"chord-match" + ((this.props.selected === chord.name) ? " chord-match--selected" : "")}
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
      <div className={"chord-match" + ((this.props.selected === chord.name) ? " chord-match--selected" : "")}
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
          <h4>Exact chord matching</h4>
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
          <p>All chords containing the notes you have selected on the fretboard</p> 
          <p>will show here - select one to show its shape in the keyboard</p>
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
    )
  }
}

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
