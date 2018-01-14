import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../shareComponents/Footer';

describe('Footer', () => {
  var wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  })

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  })
  it('is a div', () => {
    expect(wrapper.is('div')).toBe(true);
  })
  it('has a footer class', () => {
    expect(wrapper.find('.footer')).toHaveLength(1);
  })
  it('has a h3 and its text is Contact', () => {
    expect(wrapper.find('h3').text()).toEqual('Contact');
  })
  
})