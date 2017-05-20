import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';
import IntroScreen from './IntroScreen';
import HomeScreen from './HomeScreen';
import * as globalStyles from '../styles/global';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let routeName = this.props.navigation.routes[this.props.navigation.index].routeName;
    let screen;
    if (routeName === 'home') {
      screen = <HomeScreen />
    } else if (routeName === 'intro') {
      screen = <IntroScreen toHome={this.props.toHome} />
    }

    return (
      screen
    );
  }
}

Nav.propTpes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

const styles = StyleSheet.create({
  cardStack: {
    flex: 1
  }
});