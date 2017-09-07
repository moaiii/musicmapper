import { combineReducers } from 'redux';

// Reducers
import fretboardReducer from './fretboard-reducer';
import keyboardReducer from './keyboard-reducer';
import chordbankReducer from './chordbank-reducer';

// Combine Reducers
var reducers = combineReducers({
  fretboardState: fretboardReducer,
  keyboardState: keyboardReducer,
  chordbankState: chordbankReducer,
});

export default reducers;
