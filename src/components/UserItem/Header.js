import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../common/styles';


const Header = ({ picture, name }) => {
  return (
    //reuseable header 
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: picture.large }}
        style={styles.image}
      />
    </View>
  )

};

export default Header;
