import { ACTION_TYPE } from '../actions/index';
import { news } from './news';
const oldState = {
  type: ACTION_TYPE.FETCH_NEWS,
  payload: {
    data: {
      response: {
        docs: [
          { source: 'New York Times' },
          { source: 'BBC' }
        ],
        meta: {
          hits: 2
        }
      }
    }
  }
}
const newState = {
  type: ACTION_TYPE.FETCH_NEWS,
  payload: {
    data: {
      response: {
        docs: [
          { source: 'Reuters' }
        ],
        meta: {
          hits: 1
        }
      }
    }
  }
}
describe('reducers', () => {
  it('should return initial state', () => {
    expect(news(null, {})).toEqual(null);
  })
  it('should return a new state', () => {
    expect(news(oldState, newState)).toEqual({
      docs: [{
        source: 'Reuters'
      }],
      meta: {
        hits: 1
      }
    });
  })
})