import React from 'react';
import { shallow } from 'enzyme';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import { news } from '../commons/data';
import configureStore from 'redux-mock-store';
import { fetchNews } from '../actions/index';

describe('App Container', () => {
  const initialState = news;
  const mockStore = configureStore();
  var store, wrapper;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<AppContainer store={store} />)
  })

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
})