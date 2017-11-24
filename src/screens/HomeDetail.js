import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

import { DetailHeader, Info } from '../components/HomeItem';
import colors from '../helpers/colors';

class HomeDetail extends Component {
  render() {
    const recipes = this.props.navigation.state.params;

    return (
      <ScrollView style={{backgroundColor: colors.background}}>
        <DetailHeader {...recipes} />
        <Info {...recipes} />
      </ScrollView>
    );
  }
}

export default HomeDetail;
