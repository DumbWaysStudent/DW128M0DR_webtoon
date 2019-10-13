import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator }  from 'react-navigation-tabs';
import {Icon} from 'native-base';

import Home from '../../screen/mainScreen/authentication/Home'
import Favorite from '../../screen/mainScreen/authentication/Favorite'
import Profile from '../../screen/mainScreen/authentication/Profile'

const BottomTabNavigator = createBottomTabNavigator({
    Home: {
      screen: Home,
      navigationOptions:{
        tabBarLabel: "For You",
        tabBarIcon: ({ tintColor }) => (
          <Icon type="FontAwesome" name="tablet" color={tintColor}/>
        )
      }
    },
    Favorite: {
        screen: Favorite,
        navigationOptions:{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ tintColor }) => (
            <Icon type="FontAwesome" name="star" color={tintColor}/>
          )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions:{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ tintColor }) => (
            <Icon type="FontAwesome" name="user" color={tintColor}/>
          )
        }
    }
}, {
    tabBarOptions: {
      activeTintColor: '#00D163',
      inactiveTintColor:'#676767',
      style: {
        backgroundColor: '#E3E3E3',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    },
  },
)
export default createAppContainer(BottomTabNavigator);