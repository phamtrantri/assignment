import React from 'react';
import { shallow } from 'enzyme';
import Header from '../shareComponents/Header';

describe('Header', () => {
  var wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  })

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  })
  
})
