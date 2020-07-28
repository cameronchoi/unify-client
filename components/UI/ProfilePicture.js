import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const ProfilePicture = ({ size, pictureStyle, uri }) => {
  let image
  if (size === 'small') {
    image = (
      <Image
        style={styles.small}
        source={{
          uri:
            'https://avataaars.io/png?topType=LongHairStraight&hairColor=Brown&clotheType=Hoodie&skinColor=Light&avatarStyle=Circle'
        }}
      />
    )
  } else if (size === 'medium') {
    image = (
      <Image
        style={styles.medium}
        source={{
          uri: uri
        }}
      />
    )
  }
  return <View style={pictureStyle}>{image}</View>
}

const styles = StyleSheet.create({
  small: {
    width: 60,
    height: 64
  },
  medium: {
    width: 150,
    height: 160
  }
})

export default ProfilePicture
