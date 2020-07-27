import React, { useState, useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'

import AuthStack from '../components/AuthStack'
import MatchesStack from '../components/MatchesStack'

export default function Navigation () {
  const [state, dispatch] = useContext(AuthContext)
  return (
    <NavigationContainer>
      {state.userToken ? <MatchesStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
