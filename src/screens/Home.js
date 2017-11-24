import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import { recipes } from '../helpers/data';
import colors from '../helpers/colors';
import { ListItem } from '../components/HomeItem';

class Home extends Component {
  //click on arrow that can navigate to detail page for each item
  handleRowPress = (item) => {
    this.props.navigation.navigate('HomeDetail', item);
  }

  render() {
    return (
      //represents each recipes
      <FlatList
        style={{backgroundColor: colors.background}}
        data={recipes}
        renderItem={({item}) =>
          <ListItem
            recipes={item}
            onPress={() => this.handleRowPress(item)}/>
        }
        keyExtractor={(item) => item.calories}
      />
    );
  }
}
export default Home;
