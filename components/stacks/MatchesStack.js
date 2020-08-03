import React, { useContext } from 'react'
import { Keyboard } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import AppTabsStack from './AppTabsStack'
import MessagingScreen from '../../screens/MessagingScreen'
import MatchProfileScreen from '../../screens/MatchProfileScreen'

import Fonts from '../../constants/fonts'
import MessageProfile from '../UI/MessageProfile'
import { MatchContext } from '../../context/MatchContext'

const Stack = createStackNavigator()

const MatchesStack = () => {
  const [matchContext] = useContext(MatchContext)
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
      <Stack.Screen
        name='Messaging'
        component={MessagingScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <MessageProfile
              onPressHandler={() => {
                navigation.navigate('MatchProfile')
                Keyboard.dismiss()
              }}
              uri={matchContext.uri}
              name={matchContext.fullName}
            />
          )
        })}
      />
      <Stack.Screen
        name='MatchProfile'
        component={MatchProfileScreen}
        options={{
          title: '         ',
          headerTitleStyle: {
            color: 'white'
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default MatchesStack
