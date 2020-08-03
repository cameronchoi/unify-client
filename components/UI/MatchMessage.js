import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import ProfilePicture from './ProfilePicture'
import { TouchableHighlight } from 'react-native-gesture-handler'

const MatchMessage = ({
  onPressHandler,
  uri,
  name,
  latestMessage,
  email,
  fullName,
  id
}) => {
  return (
    <TouchableHighlight
      style={style.touchable}
      underlayColor='#DCDCDC'
      onPress={() => {
        onPressHandler(email, fullName, uri, id)
      }}
    >
      <View style={style.container}>
        <ProfilePicture size='small' pictureStyle={style.picture} uri={uri} />
        <View style={style.innerContainer}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>{name}</Text>
          <Text style={{ marginTop: 5, color: 'grey' }}>{latestMessage}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const style = StyleSheet.create({
  container: {
    height: 90,
    width: '100%',
    flexDirection: 'row'
  },
  innerContainer: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    width: 320
  },
  picture: {
    marginTop: 10,
    marginLeft: 10
  }
})

export default MatchMessage
