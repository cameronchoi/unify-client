import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function SignInScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Sign in screen</Text>
      <Button
        title='Go to home screen'
        onPress={() => {
          navigation.navigate('AppTabs')
        }}
      />
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
