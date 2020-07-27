import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AppTabsStack from './AppTabsStack'
import MessagingScreen from '../../screens/MessagingScreen'

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
            fontFamily: 'Montserrat_400Regular'
          }
        }}
      />
      <Stack.Screen name='Messaging' component={MessagingScreen} />
    </Stack.Navigator>
  )
}

export default MatchesStack
