import React from 'react'
import Navigation from './navigation/Navigation'
import AppLoadingScreen from './screens/AppLoadingScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { AuthProvider } from './authentification/AuthProvider'

import { View, Text } from 'react-native'

// // import useCachedResources from './hooks/useCachedResources'

export default function App () {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoadingScreen />
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </SafeAreaProvider>
    )
  }
}
