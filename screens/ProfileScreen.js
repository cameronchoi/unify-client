import React, { useContext } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { AuthContext } from '../authentification/AuthProvider'
import ProfilePicture from '../components/ProfilePicture'
import MediumText from '../components/MediumText'

export default function ProfileScreen ({ navigation }) {
  const { logout } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <ProfilePicture />
      <MediumText style={{ fontSize: 20, marginTop: 20 }}>Bob Smith</MediumText>
      <Button
        title='Logout'
        onPress={() => {
          logout()
          navigation.navigate('Start')
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
