import React, { Component } from 'react';
import {
  StyleSheet,
  DrawerLayoutAndroid,
  View,
  Text,
  Alert,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';
import Search from './Search';
import * as globalStyles from '../styles/global';

export default class HomeScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tab: 'newsFeed',
      newsCount: 0,
    };    
    
    StatusBar.setBarStyle('light-content');

    this.updateBadge = this.updateBadge.bind(this);
    this.renderNavigationView = this.renderNavigationView.bind(this);
  }
  
  showBookmarkAlert() {
    Alert.alert(
      'Coming Soon!',
      'We\'re hard at work on this feature, check back in the near future.',
      [
        { text: 'OK', onPress: () => console.log('User pressed OK') }
      ]
    );
  }

  updateBadge(fetchedNewsList) {
    this.setState({
      newsCount: fetchedNewsList.length
    });
  }
  
  renderNavigationView() {
      return (
        <View style={{flex: 1, backgroundColor:'#fff'}}>
          <TouchableOpacity
            onPress={() => {
                this.setState({tab: 'newsFeed'})
                this.refs.drawer.closeDrawer();
              }
            }>
            <View>
              <Text style={styles.drawerItem}>NewsFeed</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
                this.setState({tab: 'search'})
                this.refs.drawer.closeDrawer();
              }
            }>
            <View>
              <Text style={styles.drawerItem}>Search</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
                this.showBookmarkAlert()
                this.refs.drawer.closeDrawer();
              }
            }>
            <View>
              <Text style={styles.drawerItem}>Bookmarks</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
  }

  render() {
    var feedOpacity = 0;
    var searchOpacity = 0;

    switch (this.state.tab) {
      case 'newsFeed':
        feedOpacity = 1;
        break;

      case 'search':
        searchOpacity = 1;
        break;

      default:
        break;
    }

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this.renderNavigationView}
        ref="drawer"
        >
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  drawerItem: {
    padding: 10,
    fontSize: 15,
    textAlign: 'left',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
});