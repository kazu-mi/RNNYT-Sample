import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';
import Title from './Title';

const Thumbnail = ({ url, titleText, accentColor, style }) => {
  const imageStyle = {
    backgroundColor: `${accentColor}77`
  };
  const titleComponent = <Title style={styles.title}>{titleText}</Title>;
  
  return (
    <View style={[styles.container, { borderColor: accentColor }, style]}>
      {url.length > 0 ? (
        <Image
          style={[styles.image]}
          source={{
            uri: url,
          }}
          >
          {titleComponent}
        </Image>
     ) : (
        <View
          style={[styles.image, imageStyle]}>
          {titleComponent}
        </View>
      )
    }
    </View>
  );
};

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  titleText: PropTypes.string,
  accentColor: PropTypes.string.isRequired,
  style: View.propTypes.style,
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderStyle: 'solid',
  },
  image: {
    height: 100,
    justifyContent: 'flex-end',
  },
  title: {
    padding: 5,
  },
});

export default Thumbnail;