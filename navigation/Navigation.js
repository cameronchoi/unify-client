import React, { useState, useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import AppLoadingScreen from '../screens/AppLoadingScreen'
import { AuthContext } from '../authentification/AuthProvider'

import AuthStack from '../components/AuthStack'
import AppTabs from '../components/AppTabs'

export default function Navigation () {
  const [loading, setLoading] = useState(true)
  const { user, login } = useContext(AuthContext)

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          login()
        }
        setLoading(false)
        console.log(userString)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <AppLoadingScreen />
  }
  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}
