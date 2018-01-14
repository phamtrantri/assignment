import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import ListNews from '../ListNews';
import Header from '../shareComponents/Header';
import Pagination from "react-js-pagination/dist/Pagination";
import Footer from '../shareComponents/Footer';

import { news } from '../../commons/data';

describe('App', () => {
  var wrapper;
  beforeEach(() => {
    wrapper = shallow(<App news={news} fetchNews={() => { }} />);
  })
  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('is a div', () => {
    expect(wrapper.is('div')).toBe(true);
  })
  it('contains Header', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  })
  it('has a push class', () => {
    expect(wrapper.find('.push').length).toEqual(1);
  })
  it('has a container-fluid class', () => {
    expect(wrapper.find('.container-fluid').length).toEqual(1);
  })
  it('contains List News', () => {
    expect(wrapper.find(ListNews)).toHaveLength(1);
  })
  it('contains Pagination', () => {
    expect(wrapper.find(Pagination)).toHaveLength(1);
  })
  it('contains Footer', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  })
})
