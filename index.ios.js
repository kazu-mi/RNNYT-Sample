/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import AppText from './src/components/AppText';
import Title from './src/components/Title';
import SmallText from './src/components/SmallText';
import Byline from './src/components/Byline';
import Thumbnail from './src/components/Thumbnail';

export default class RNNYT extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Thumbnail 
          url='https://blog-imgs-85.fc2.com/e/r/o/erog/151104_bprss_004.jpg' 
          style={{width: 100}} 
          accentColor='#998866'
          titleText='SEX'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('RNNYT', () => RNNYT);
