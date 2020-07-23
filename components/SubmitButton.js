import * as React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function SubmitButton ({ text, navigation, destination }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate({ destination })
      }}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1574EA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
