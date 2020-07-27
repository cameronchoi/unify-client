import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const ProfilePicture = ({ size, pictureStyle }) => {
  let image
  if (size === 'small') {
    image = (
      <Image
        style={styles.small}
        source={require('../assets/images/picture.jpg')}
      />
    )
  } else if (size === 'medium') {
    image = (
      <Image
        style={styles.medium}
        source={require('../assets/images/picture.jpg')}
      />
    )
  }
  return <View style={pictureStyle}>{image}</View>
}

const styles = StyleSheet.create({
  small: {
    width: 66,
    height: 66,
    borderRadius: 33
  },
  medium: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
})

export default ProfilePicture
