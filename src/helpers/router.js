import React from 'react';
import { Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import HomeDetail from '../screens/HomeDetail';
import Food from '../screens/Food';
import Profile from '../screens/Profile';
import Analytics from '../screens/Analytics';
import LoginForm from '../screens/LoginForm';
import RegisterForm from '../screens/RegisterForm';

//To navigate between loginform and registerform
export const LoginStack = StackNavigator({
  Login: { screen: LoginForm},
  Register: { screen: RegisterForm},
});

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Recipe',
    }),
  },
  HomeDetail: {
    screen: HomeDetail ,
    navigationOptions: ({ navigation }) => ({
      title: 'Detail',
    }),
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: 'Me',
    }),
  },
});

export const FoodStack = StackNavigator({
  Food: {
    screen: Food,
    screenProps: {test:123},
    navigationOptions: ({navigation}) => ({
      title: 'Food',
    }),
  },
});

export const AnalyticsStack = StackNavigator({
  Analytics: {
    screen: Analytics,
    navigationOptions: ({navigation}) => ({
      title: 'Analytics',
    }),
  },
});

//The tab navigator for four screens
export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-home" size={35} color={tintColor} />,
    },
  },
  Food: {
    screen: FoodStack,
    navigationOptions: {
      tabBarLabel: 'Food',
      test: '123',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-restaurant" size={35} color={tintColor} />,
    },
  },
  Analytics: {
    screen: AnalyticsStack,
    navigationOptions: {
      tabBarLabel: 'Analytics',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-stats" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      test: '123',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor} />,
    },
  },
},
  {
  tabBarOptions: {
    activeTintColor: '#2ecc71',
  },

});
