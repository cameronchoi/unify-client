import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/picture.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
})

export default ProfilePicture
