import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StartUpScreen from '../../screens/StartUpScreen'
import SignInScreen from '../../screens/SignInScreen'
import EmailSignUpScreen from '../../screens/EmailSignUpScreen'
import PasswordSignUpScreen from '../../screens/PasswordSignUpScreen'
import NameSignUpScreen from '../../screens/NameSignUpScreen'
import UniNameSignUpScreen from '../../screens/UniNameSignUpScreen'
import UniYearSignUpScreen from '../../screens/UniYearSignUpScreen'
import DegreeSignUpScreen from '../../screens/DegreeSignUpScreen'
import SubjectSignUpScreen from '../../screens/SubjectSignUpScreen'
import PersonalSignUpScreen from '../../screens/PersonalSignUpScreen'
import FriendSignUpScreen from '../../screens/FriendSignUpScreen'
import WelcomeScreen from '../../screens/WelcomeScreen'

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
      <Stack.Screen name='EmailSignUp' component={EmailSignUpScreen} />
      <Stack.Screen name='PasswordSignUp' component={PasswordSignUpScreen} />
      <Stack.Screen name='NameSignUp' component={NameSignUpScreen} />
      <Stack.Screen name='UniNameSignUp' component={UniNameSignUpScreen} />
      <Stack.Screen name='UniYearSignUp' component={UniYearSignUpScreen} />
      <Stack.Screen name='DegreeSignUp' component={DegreeSignUpScreen} />
      <Stack.Screen name='SubjectSignUp' component={SubjectSignUpScreen} />
      <Stack.Screen name='PersonalSignUp' component={PersonalSignUpScreen} />
      <Stack.Screen name='FriendSignUp' component={FriendSignUpScreen} />
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
