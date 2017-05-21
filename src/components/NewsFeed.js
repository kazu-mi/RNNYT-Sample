import React, { PropTypes, Component } from 'react';
import {
  ListView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  WebView,
  ViewPropTypes,
  RefreshControl,
  ActivityIndicator,
  Linking,
} from 'react-native';
import * as globalStyles from '../styles/global';
import NewsItem from './NewsItem';
import SmallText from './SmallText';

export default class NewsFeed extends Component {
  
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.title !== row2.title
    });
    
    this.state = {
      dataSource: this.ds.cloneWithRows(props.news),
      modalVisible: false,
      initialLoading: true,
      refreshing: false,
    };
    
    this.renderModal = this.renderModal.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);

    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.news),
      initialLoading: false,
    });
  }

  componentDidUpdate() {
    if (this.props.onNewsFetched) {
      this.props.onNewsFetched(this.props.news);
    }
  }

  refresh() {
    if (this.props.load) {
      this.props.load();
    }
  }
  
  renderModal() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={this.onModalClose}
        >
        <View style={styles.modalContent}>
          <View style={styles.modalButtons}>
            <TouchableOpacity
              onPress={this.onModalClose}
              >
              <SmallText>Close</SmallText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL(this.state.modalUrl)}
              >
              <SmallText>Open in Browser</SmallText>
            </TouchableOpacity>
          </View>
          <WebView 
            scalesPageToFit
            source={{uri: this.state.modalUrl}}
            />
        </View>
      </Modal>
    );
  }
  
  onModalOpen(url) {
    this.setState({
      modalVisible: true,
      modalUrl: url,
    });
  }
  
  onModalClose() {
    this.setState({
      modalVisible: false
    });
  }
  
  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    return (
      <NewsItem
        style={styles.newsItem}
        index={index}
        onPress={() => {this.onModalOpen(rowData.url)}}
        onBookmark={() => this.props.addBookmark(rowData.url)}
        {...rowData}
        />
    );
  }
  
  render() {
    const {
      listStyles = globalStyles.COMMON_STYLES.pageContainer,
      showLoadingSpinner,
    } = this.props;
    const { initialLoading, refreshing, dataSource } = this.state;

    return (
      (initialLoading && showLoadingSpinner ?
        <View style={[listStyles, styles.loadingContainer]}>
          <ActivityIndicator
            animating
            size="small"
            {...this.props}
            />
        </View>
      :
        <View style={globalStyles.COMMON_STYLES.pageContainer}>
          <ListView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.refresh}
              />
            }
            enableEmptySections
            dataSource={dataSource}
            renderRow={this.renderRow}
            style={listStyles}
            />
          {this.renderModal()}
        </View>
      )
    );
  }
}

NewsFeed.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  listStyles: ViewPropTypes.style,
  load: PropTypes.func,
  onNewsFetched: PropTypes.func,
  showLoadingSpinner: PropTypes.bool,
  onBookmark: PropTypes.func,
}

NewsFeed.defaultProps = {
  showLoadingSpinner: true,
};

const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: globalStyles.BG_COLOR,
  },
  modalButtons: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});