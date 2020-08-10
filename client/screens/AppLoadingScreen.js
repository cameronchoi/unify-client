import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

export default function AppLoadingScreen () {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
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
