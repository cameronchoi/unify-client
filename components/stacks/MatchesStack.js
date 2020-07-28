import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AppTabsStack from './AppTabsStack'
import MessagingScreen from '../../screens/MessagingScreen'

import Fonts from '../../constants/fonts'

const Stack = createStackNavigator()

const MatchesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={AppTabsStack}
        options={{
          title: 'unify',
          headerTitleStyle: {
            fontFamily: Fonts.normal,
            fontSize: 20
          }
        }}
      />
      <Stack.Screen name='Messaging' component={MessagingScreen} />
    </Stack.Navigator>
  )
}

export default MatchesStack
