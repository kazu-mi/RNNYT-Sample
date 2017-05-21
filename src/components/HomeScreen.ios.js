import React, { Component } from 'react';
import {
  TabBarIOS,
  Text,
  Alert,
  StatusBar,
} from 'react-native';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';
import BookmarkContainer from '../containers/BookmarkContainer';
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
  
  render() {
    return (
      <TabBarIOS
        barTintColor={globalStyles.BAR_COLOR}
        tintColor={globalStyles.LINK_COLOR}
        translucent={false}
        >
        <TabBarIOS.Item
          badge={this.state.newsCount}
          systemIcon={'featured'}
          selected={this.state.tab === 'newsFeed'}
          onPress={() => this.setState({ tab: 'newsFeed' })}
          >
          <NewsFeedContainer onNewsFetched={this.updateBadge}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={'search'}
          selected={this.state.tab === 'search'}
          onPress={() => this.setState({ tab: 'search' })}
          >
          <SearchContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={'bookmarks'}
          selected={this.state.tab === 'bookmarks'}
          onPress={() => this.setState({ tab: 'bookmarks' })}
          >
          <BookmarkContainer />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}