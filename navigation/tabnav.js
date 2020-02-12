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
          <Feather name='home' color={tintColor} size={32} />
        )
      }
    },

    MyWinesListScreen: {
      screen: MyWinesListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name='list' color={tintColor} size={32} />
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
          <FontAwesome name='globe' color={tintColor} size={32} />
        )
      }
    },
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <UserCircle
            size={32}
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
