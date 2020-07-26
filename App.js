import React from 'react'
import AppLoadingScreen from './screens/AppLoadingScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium
} from '@expo-google-fonts/montserrat'
import { AuthProvider } from './authentification/AuthContext'
import Navigation from './navigation/navigation'

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
    )
  }
}
