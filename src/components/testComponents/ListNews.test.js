import React from 'react';
import { shallow } from 'enzyme';
import { news } from '../../commons/data';
import ListNews from '../ListNews';


describe('List News', () => {
  var wrapper;
  beforeEach(() => {
    wrapper = shallow(<ListNews news={news.docs}/>)
  })
  
  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  })
  it('should render news correctly', () => {
    const col = wrapper.instance().renderCol(news.docs, 0, news.docs.length);
    expect(col).toHaveLength(news.docs.length);
  })
  it('should have 4 column', () => {
    expect(wrapper.find('.row > div').length).toBe(4);
  })
})


