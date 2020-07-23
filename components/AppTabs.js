import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import ProfileScreen from '../screens/ProfileScreen'
import MessagingScreen from '../screens/MessagingScreen'
import HomeScreen from '../screens/HomeScreen'

const Tab = createMaterialBottomTabNavigator()

const AppTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Profile' component={ProfileScreen} />
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Messaging' component={MessagingScreen} />
    </Tab.Navigator>
  )
}

export default AppTabs
