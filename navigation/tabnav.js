import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  Feather
} from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import MyWinesListScreen from '../screens/MyWinesListScreen';
import AddWineScreen from '../screens/AddWineScreen';
import CommumityScreen from '../screens/CommunityScreen';
import AccountScreen from '../screens/AccountScreen';

import AddWineNavButton from './components/AddWineNavButton';
import UserCircle from '../components/UserCircle';

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name='globe' color={tintColor} size={26} />
        )
      }
    },

    MyWinesListScreen: {
      screen: MyWinesListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name='list' color={tintColor} size={26} />
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
          <Entypo name='location-pin' color={tintColor} size={26} />
        )
      }
    },
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <UserCircle
            size={26}
            border={tintColor}
            image={require('../assets/images/profile.jpg')}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#c06262',
      inactiveTintColor: '#282d44',
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
