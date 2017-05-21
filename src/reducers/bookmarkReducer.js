import { BOOKMARK, LOAD_BOOKMARKS } from '../actions/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case BOOKMARK:
      return action.payload;
    
    case LOAD_BOOKMARKS:
      return [...state, action.payload];

    default:
      return state;
  }
}