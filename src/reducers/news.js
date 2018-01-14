import { ACTION_TYPE } from '../actions/index';

export const news = (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_NEWS:
      try {
        const docs = action.payload.data.response.docs;
        const meta = action.payload.data.response.meta;
        return {
          meta,
          docs
        };
      } catch (error) {
        return null;
      }
      break;
    default:
      return state;
      break;
  }
}