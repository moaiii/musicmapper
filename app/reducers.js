import {combineReducers} from 'redux';

// Reducers
import fretboardReducer from './src/fretboard/reducer';
import keyboardReducer from './src/keyboard/reducer';
import chordbankReducer from './src/chordbank/reducer';
import generalReducer from './src/main/reducer';

// Combine Reducers
var reducers = combineReducers({
  fretboardState: fretboardReducer,
  keyboardState: keyboardReducer,
  chordbankState: chordbankReducer,
  generalState: generalReducer
});

export default reducers;