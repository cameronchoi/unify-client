import React, { useState, useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../authentification/AuthContext'

import AuthStack from '../components/AuthStack'
import AppTabs from '../components/AppTabs'

export default function Navigation () {
  const [state, dispatch] = useContext(AuthContext)
  return (
    <NavigationContainer>
      {state.userToken ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}
