import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from '../common/styles';
import Row from '../UserItem/Row';

const Info = ({ ingredients, steps, calories }) => {
  return (
    <View style={styles.infoContainer}>
    <Row
      label="Ingredients"
      body={ ingredients }
    />
    <Row
      label="Steps"
      body={ steps }
    />
    <Row
      label="Calories"
      body={ calories }
    />
    </View>
  );
}

export default Info;
