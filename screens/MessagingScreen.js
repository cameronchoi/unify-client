import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function MessagingScreen () {
  return (
    <View style={styles.container}>
      <Text>Messaging screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
