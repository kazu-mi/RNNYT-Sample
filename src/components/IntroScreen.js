import React, { PropTypes, Component } from 'react';
import {
  View,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Title from './Title';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

StatusBar.setBarStyle('light-content');

export default class IntroScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.toHome()}
        >
        <Title>React Native News Reader</Title>
        <AppText>Start Reading</AppText>
      </TouchableOpacity>
    )
  }

}

IntroScreen.propTypes = {
  toHome: PropTypes.func,
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
})