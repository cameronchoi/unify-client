import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'
import Colour from '../constants/colours'

import MediumText from '../components/MediumText'
import SubmitButton from '../components/SubmitButton'

export default function WelcomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, alignItems: 'center', marginTop: 200 }}>
        <FontAwesome5 name='user-friends' size={70} color={Colour.primary} />
        <MediumText style={{ fontSize: 30, marginTop: 15 }}>
          Welcome to unify!
        </MediumText>
      </View>
      <View style={{ flex: 1 }}>
        <SubmitButton
          onPress={() => {
            navigation.navigate('AppTabs')
          }}
        >
          Get Started
        </SubmitButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
