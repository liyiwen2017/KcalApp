import React from 'react';
import { View, Text, Image, TouchableHighlight, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from '../common/styles';
import colors from '../../helpers/colors';

const ListItem = ({ recipes, onPress }) => {
  return(
    <TouchableHighlight
      onPress={onPress}
    >
      <View style={styles.row}>
        <Image
          style={styles.avatar}
          source={{ uri: recipes.picture }}
        />
        <View>
          <Text style={styles.title}>{recipes.title}</Text>
          <Text style={styles.calories}>{'calories: '+recipes.calories}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon
            name="ios-arrow-forward"
            size={CHEVRON_SIZE}
            style={styles.chevron}
            color={colors.subtleText}
          />
        </View>
      </View>
    </TouchableHighlight>
  )
};

export default ListItem;
