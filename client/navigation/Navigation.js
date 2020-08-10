import React, { useState, useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'

import AuthStack from '../components/stacks/AuthStack'
import MatchesStack from '../components/stacks/MatchesStack'
import { SignUpProvider } from '../context/SignUpContext'
import { MatchProvider } from '../context/MatchContext'

export default function Navigation () {
  const [state, dispatch] = useContext(AuthContext)
  return (
    <NavigationContainer>
      {state.userToken ? (
        <MatchProvider>
          <MatchesStack />
        </MatchProvider>
      ) : (
        <SignUpProvider>
          <AuthStack />
        </SignUpProvider>
      )}
    </NavigationContainer>
  )
}
