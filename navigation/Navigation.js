import React, { useState, useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'

import AuthStack from '../components/stacks/AuthStack'
import MatchesStack from '../components/stacks/MatchesStack'

export default function Navigation () {
  const [state, dispatch] = useContext(AuthContext)
  return (
    <NavigationContainer>
      {state.userToken ? <MatchesStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
