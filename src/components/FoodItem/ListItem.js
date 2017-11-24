
import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, Platform , TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import styles, { CHEVRON_SIZE } from '../common/styles';
import colors from '../../helpers/colors';


class ListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      amount: this.props.amount
    };
  }

  render() {
    return (
      <TouchableHighlight>
        <View style={styles.row}>
          <Image
            style={styles.avatar}
            source={{ uri: this.props.pictureUri }}
          />
          <View>
            <Text style={styles.title}>{this.props.foodName}</Text>
            <Text style={styles.calories}>{'calories: '+this.props.calories}</Text>
          </View>
          <View style={styles.chevronContainer}>
          <TextInput
            style={styles.textValue}
            placeholder = "0"
            keyboardType = 'numeric'
            onChangeText={(value) => {
              //parse string to integer, then proceed
              var value = parseInt(value);
              this.setState({amount: value});
              this.props.amountChanged({
                name:this.props.foodName,
                value,
                calories:this.props.calories
              });
            }}
            value={this.state.amount}
          />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

ListItem.propTypes = {
  amount: PropTypes.number,
  calories: PropTypes.number,
  foodName: PropTypes.string,
  amountChanged: PropTypes.func,
  pictureUri: PropTypes.string,
};


export default ListItem;
