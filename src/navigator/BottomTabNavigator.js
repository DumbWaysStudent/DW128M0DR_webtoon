import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator }  from 'react-navigation-tabs';
import Icon from 'native-base';

import Home from '../screen/main/sign/Home'

const BottomTabNavigator =  createBottomTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title:"For You",
        tabBarIcon: ({momo})=>{
            <Icon type="FontAwesome" name="home" />
        }
    }
      
    }
  }, {
      tabBarOptions: {
        activeTintColor: '#2ce617',
        inactiveTintColor: '#6C7B95',
        style: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 5
        }
      },
    },
)

export default createAppContainer(BottomTabNavigator)