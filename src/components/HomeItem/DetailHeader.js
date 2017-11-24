import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../common/styles';

const DetailHeader = ({ picture, title }) => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: picture}}
        style={styles.image}
      />
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  )

};

export default DetailHeader;
