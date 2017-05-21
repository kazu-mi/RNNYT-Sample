import { BOOKMARK, LOAD_BOOKMARKS } from './actionTypes';
import { AsyncStorage } from 'react-native';

export const addBookmark = (url) => {
  AsyncStorage.getItem('bookmarks').then((bookmarks) => {
    if (bookmarks) {
      const bookmarksArray = JSON.parse(bookmarks);
      // promiseを返すからreturnする
      return AsyncStorage.setItem('bookmarks', JSON.stringify([...bookmarksArray, url]));
    }
    return AsyncStorage.setItem('bookmarks', JSON.stringify([url]));
  });

  return {
    type: BOOKMARK,
    payload: url,
  };
};

export const loadBookmarks = () => ({
  type: LOAD_BOOKMARKS,
  payload: AsyncStorage.getItem('bookmarks').then((bookmarks) => {
    if (bookmarks) {
      return JSON.parse(bookmarks);
    }

    return [];
  })
});