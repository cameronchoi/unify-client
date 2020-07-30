import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const ProfilePicture = ({ size, pictureStyle, uri }) => {
  let image
  if (size === 'x-small') {
    image = (
      <Image
        defaultSource={require('../../assets/images/loading.png')}
        style={styles.xSmall}
        source={{
          uri:
            'https://avataaars.io/png?topType=ShortHairTheCaesar&hairColor=Black&clotheType=BlazerSweater&skinColor=Pale&avatarStyle=Circle'
        }}
      />
    )
  } else if (size === 'small') {
    image = (
      <Image
        defaultSource={require('../../assets/images/loading.png')}
        style={styles.small}
        source={{
          uri:
            'https://avataaars.io/png?topType=ShortHairTheCaesar&hairColor=Black&clotheType=BlazerSweater&skinColor=Pale&avatarStyle=Circle'
        }}
      />
    )
  } else if (size === 'medium') {
    image = (
      <Image
        defaultSource={require('../../assets/images/loading.png')}
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
  xSmall: {
    width: 34.5,
    height: 36.8
  },
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
