import { LOAD_NEWS, SEARCH_NEWS } from './actionTypes';
import NYT_API_KEY from '../config/nytApiKey';

const API_URL = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${NYT_API_KEY}`;

// ニュース読み込み
export const loadNews = () => {
  const req = fetch(API_URL);
  return {
    type: LOAD_NEWS,
    payload: req.then(response => response.json()),
  };
};

// ニュース検索
export const searchNews = (searchTerm) => ({
  type: SEARCH_NEWS,
  payload: searchTerm,
});