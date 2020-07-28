import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import ProfilePicture from './ProfilePicture'
import { TouchableHighlight } from 'react-native-gesture-handler'

const MatchMessage = ({ onPressHandler }) => {
  return (
    <TouchableHighlight
      style={style.touchable}
      underlayColor='#DCDCDC'
      onPress={onPressHandler}
    >
      <View style={style.container}>
        <ProfilePicture size='small' pictureStyle={style.picture} />
        <View style={style.innerContainer}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>
            Michelle Smith
          </Text>
          <Text style={{ marginTop: 5, color: 'grey' }}>
            The latest message
          </Text>
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
    // borderBottomColor: 'grey',
    // borderBottomWidth: 1
  },
  innerContainer: {
    flexDirection: 'column',
    margin: 20
  },
  picture: {
    marginTop: 10,
    marginLeft: 10
  }
})

export default MatchMessage
