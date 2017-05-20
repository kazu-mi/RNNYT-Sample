import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import { NAVIGATION_HOME, NAVIGATION_INTRO } from '../actions/actionTypes';

const firstAction = AppNavigator.router.getActionForPathAndParams('intro');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('home')

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('intro'));

export default (state = initialState, action = {}) => {
  let nextState;
  switch (action.type) {
    case NAVIGATION_INTRO:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;

    case NAVIGATION_HOME:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'home' }),
        state
      );
      break;

    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};