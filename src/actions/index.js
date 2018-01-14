import axios from 'axios';
const API_KEY = '01d2f5d078ae423e878362ec88b3c48f';
export const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=singapore`;

export const ACTION_TYPE = {
  FETCH_NEWS: 'FETCH_NEWS'
};

export const fetchNews = (page = 0) => {
  const url = `${ROOT_URL}&page=${page}`;
  const request = axios.get(url)
  return {
    type: ACTION_TYPE.FETCH_NEWS,
    payload: request
  }
}