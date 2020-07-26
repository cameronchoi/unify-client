import React from 'react'
import Navigation from './navigation/Navigation'
import AppLoadingScreen from './screens/AppLoadingScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium
} from '@expo-google-fonts/montserrat'
import { AuthProvider } from './authentification/AuthProvider'

import { View, Text } from 'react-native'

// // import useCachedResources from './hooks/useCachedResources'

export default function App () {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium
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
      //   <SafeAreaProvider>
      //     <AuthProvider />
      //   </SafeAreaProvider>
    )
  }
}
