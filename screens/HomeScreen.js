import React, { useContext } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import SubmitButton from '../components/SubmitButton'

export default function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <SubmitButton>Match by degree</SubmitButton>
      <SubmitButton>Match by subject</SubmitButton>
      <SubmitButton>Match by interests?</SubmitButton>
      <SubmitButton>Find a study buddy</SubmitButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 150
  }
})
