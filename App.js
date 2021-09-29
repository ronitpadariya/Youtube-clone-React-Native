import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Constant from 'expo-constants'
import VideoPlayer from '../src/screen/VideoPlayer'
import Explore from '../src/screen/Explore'
import Subscribe from '../src/screen/Subscribe'

const Stack = createStackNavigator()
const Tabs =  createBottomTabNavigator()

const RootHome = ()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="explore" component={Explore} />
      <Tab.Screen name="subscribe" component={Subscribe} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator header="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="search" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


