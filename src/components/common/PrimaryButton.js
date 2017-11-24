import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';
import colors from '../../helpers/colors';

const window = Dimensions.get('window');

const PrimaryButton = ({ label, onPress }) => (
  <View style={styles.primaryButtonContainer}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.primaryButton}
    >
      <Text style={styles.primaryButtonText}>{label}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  primaryButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  primaryButton: {
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.link,
    width:180,
    
  },
  primaryButtonText: {
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export { PrimaryButton };
