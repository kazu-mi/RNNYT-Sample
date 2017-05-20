import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import IntroScreen from '../components/IntroScreen';
import HomeScreen from '../components/HomeScreen';

import { toHome, toIntro  } from '../actions/navigationActions';

export const AppNavigator = StackNavigator({
  intro: {
    screen: IntroScreen,
  },
  home: {
    screen: HomeScreen,
  },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toIntro,
    toHome
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);