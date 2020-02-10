import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import MyWinesListScreen from '../screens/MyWinesListScreen';
import AddWineScreen from '../screens/AddWineScreen';
import CommumityScreen from '../screens/CommunityScreen';
import AccountScreen from '../screens/AccountScreen';

import AddWineNavButton from './components/AddWineNavButton';

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name='graduation-cap' color={tintColor} size={32} />
        )
      }
    },

    MyWinesListScreen: {
      screen: MyWinesListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name='search' color={tintColor} size={25} />
        )
      }
    },
    AddWineScreen: {
      screen: AddWineScreen,
      navigationOptions: {
        tabBarIcon: <AddWineNavButton />
      }
    },
    CommumityScreen: {
      screen: CommumityScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name='list' color={tintColor} size={32} />
        )
      }
    },
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name='account-circle' color={tintColor} size={32} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#ab1c1c',
      inactiveTintColor: 'black',
      style: {
        height: 70,
        elevation: 10,
        borderRadius: 20,
        borderTopWidth: 0
      }
    }
  }
);

export default createAppContainer(TabNavigator);
