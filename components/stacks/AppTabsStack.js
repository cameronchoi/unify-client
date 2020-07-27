import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import ProfileScreen from '../../screens/ProfileScreen'
import MatchesScreen from '../../screens/MatchesScreen'
import HomeScreen from '../../screens/HomeScreen'

const Tab = createMaterialBottomTabNavigator()

const AppTabsStack = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      barStyle={{
        backgroundColor: 'white'
      }}
    >
      <Tab.Screen name='Profile' component={ProfileScreen} />
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Matches' component={MatchesScreen} />
    </Tab.Navigator>
  )
}

export default AppTabsStack
