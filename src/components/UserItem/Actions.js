import React from 'react';
import { View } from 'react-native';

import styles from '../common/styles';
import { toPhoneNumber } from '../../helpers/string';
import Row from './Row';

const Actions = ({email, phone}) => {
  return (
    <View style={styles.actionContainer}>
      <Row
        label="Email"
        body={email}
        actions={[
          {
            onPress: () => null,
            iosIcon: 'ios-mail',
          },
        ]}
      />
    </View>
  );
};

export default Actions;
