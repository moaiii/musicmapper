import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Fret from './fret';

describe('the Fret component', () => {
  it('should render correctly', () => {
    let note = {
      note:"D",
      octave:5,
      selected:false
    }

    let handleClick = jest.fn();

    const fret = mount(<Fret note={note} handleClick={handleClick}/>);
   
    expect(fret.find('.fret__name').length).toEqual(1);
    // console.log(fret.find('.string__fret'));
    fret.find('div').simulate('click');
    fret.find('div').simulate('click');
    fret.find('div').simulate('click');
    // console.log(handleClick.mock.calls)

    // expect(fret.find('.clicks-1').length).to.equal(1);
  })
})