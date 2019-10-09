import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator }  from 'react-navigation-tabs';
import {Icon} from 'native-base';

import ForYouStack from '../screen/main/sign/Home'
import FavoriteStack from '../screen/main/sign/Favorite'
import ProfileStack from '../screen/main/sign/Profile'

const BottomTabNavigator = createBottomTabNavigator({
    Home: {
      screen: ForYouStack,
      navigationOptions:{
        tabBarLabel: "For You",
        tabBarIcon: ({ tintColor }) => (
          <Icon type="FontAwesome" name="tablet" color={tintColor}/>
        )
      }
    },
    Favorite: {
        screen: FavoriteStack,
        navigationOptions:{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ tintColor }) => (
            <Icon type="FontAwesome" name="star" color={tintColor}/>
          )
        }
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions:{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ tintColor }) => (
            <Icon type="FontAwesome" name="user" color={tintColor} style={{color:'#676767'}} />
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