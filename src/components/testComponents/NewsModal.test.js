import React from 'react';
import { shallow } from 'enzyme';
import { news } from '../../commons/data';
import NewsModal from '../NewsModal';


describe('open Modal', () => {
  var wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NewsModal
        showModal={true}
        closeModal={() => {}}
        source={news.docs[0].source}
        cover={news.docs[0].cover}
        pubDate={news.docs[0].pubDate} 
        snippet={news.docs[0].snippet}
      />
    )
  })
  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1);
  })
  it('has a modal-source', () => {
    expect(wrapper.find('.modal-source')).toHaveLength(1);
  })
  it('has a modal-pub-date', () => {
    expect(wrapper.find('.modal-pub-date')).toHaveLength(1);
  })
  it('has a modal-snippet', () => {
    expect(wrapper.find('.modal-snippet')).toHaveLength(1);
  })
  it('has a button and its text is back', () => {
    expect(wrapper.find('button').text()).toEqual('Back');
  })
  it('contains open Modal', () => {
    expect(wrapper.find('Modal').prop('isOpen')).toEqual(true);
  })

})
