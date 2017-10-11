import * as types from './../actions/types';

const initalState = {
  tooltipIsOn: false
};

const generalReducer = (state = initalState, action) => {
  switch (action.type) {

    case types.GENERAL_TOOLTIP_OFF:
      return Object.assign({}, state, {
        tooltipIsOn: false,
      });
      break;

    case types.GENERAL_TOOLTIP_ON:
      return Object.assign({}, state, {
        tooltipIsOn: true,
      });
      break;

    default:
      return state;
  }
};

export default generalReducer;
