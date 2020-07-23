import React, { useContext } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { AuthContext } from '../authentification/AuthProvider'

export default function HomeScreen () {
  const { logout } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title='Logout' onPress={() => logout()} />
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
