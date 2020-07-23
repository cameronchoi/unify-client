import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '../screens/SignInScreen'
import StartUpScreen from '../screens/StartUpScreen'
import AppTabs from './AppTabs'

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <Stack.Screen name='Start' component={StartUpScreen} />
      <Stack.Screen name='SignIn' component={SignInScreen} />
      <Stack.Screen name='AppTabs' component={AppTabs} />
    </Stack.Navigator>
  )
}

export default AuthStack
