import {
  NAVIGATION_HOME,
  NAVIGATION_INTRO,
} from './actionTypes';

export const toIntro = () => ({
  type: NAVIGATION_INTRO,
});

export const toHome = () => ({
  type: NAVIGATION_HOME,
});