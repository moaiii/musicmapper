import * as types from '../../types';

export function tooltipOn() {
  return {
    type: types.GENERAL_TOOLTIP_ON
  };
}

export function tooltipOff() {
  return {
    type: types.GENERAL_TOOLTIP_OFF
  };
}
