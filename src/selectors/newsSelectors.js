import { createSelector } from 'reselect';
import { reshapeNewsData, filterNewsBySearchTerm, filterBookmark } from '../util/dataTransformations';

const newsSelector = (state) => (state.news);
const searchTermSelector = (state) => (state.searchTerm);
const bookmarkSelector = (state) => (state.bookmark);

const reshapeNewsSelector = createSelector(
  [newsSelector],
  reshapeNewsData
);

export const allNewsSelector = createSelector(
  [reshapeNewsSelector],
  newsItems => newsItems
)

const caseInsensitiveSearchTermSelector = createSelector(
  searchTermSelector,
  searchTerm => searchTerm.toLowerCase()
);

export const searchNewsSelector = createSelector(
  [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
  filterNewsBySearchTerm
);

export const bookmarkNewsSelector = createSelector(
  [reshapeNewsSelector, bookmarkSelector],
  filterBookmark,
);