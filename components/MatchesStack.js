import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AppTabsStack from '../components/AppTabsStack'
import MessagingScreen from '../screens/MessagingScreen'

const Stack = createStackNavigator()

const MatchesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Matches' component={AppTabsStack} />
      <Stack.Screen name='Messaging' component={MessagingScreen} />
    </Stack.Navigator>
  )
}

export default MatchesStack
