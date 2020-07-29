import React from 'react'
import AppLoadingScreen from './screens/AppLoadingScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import {
//   useFonts,
//   Montserrat_400Regular,
//   Montserrat_500Medium
// } from '@expo-google-fonts/montserrat'

import {
  useFonts,
  Muli_200ExtraLight,
  Muli_300Light,
  Muli_400Regular,
  Muli_500Medium,
  Muli_600SemiBold,
  Muli_700Bold,
  Muli_800ExtraBold,
  Muli_900Black,
  Muli_200ExtraLight_Italic,
  Muli_300Light_Italic,
  Muli_400Regular_Italic,
  Muli_500Medium_Italic,
  Muli_600SemiBold_Italic,
  Muli_700Bold_Italic,
  Muli_800ExtraBold_Italic,
  Muli_900Black_Italic
} from '@expo-google-fonts/muli'

import { AuthProvider } from './context/AuthContext'
import Navigation from './navigation/Navigation'

// // import useCachedResources from './hooks/useCachedResources'

export default function App () {
  //   let [fontsLoaded] = useFonts({
  //     Montserrat_400Regular,
  //     Montserrat_500Medium
  //   })
  let [fontsLoaded] = useFonts({
    Muli_200ExtraLight,
    Muli_300Light,
    Muli_400Regular,
    Muli_500Medium,
    Muli_600SemiBold,
    Muli_700Bold,
    Muli_800ExtraBold,
    Muli_900Black,
    Muli_200ExtraLight_Italic,
    Muli_300Light_Italic,
    Muli_400Regular_Italic,
    Muli_500Medium_Italic,
    Muli_600SemiBold_Italic,
    Muli_700Bold_Italic,
    Muli_800ExtraBold_Italic,
    Muli_900Black_Italic
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
