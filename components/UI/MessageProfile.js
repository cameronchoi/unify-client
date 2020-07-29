import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ProfilePicture from './ProfilePicture'
import MediumText from './MediumText'
import { View, StyleSheet } from 'react-native'

const MessageProfile = ({ name, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.container}>
        <ProfilePicture size='x-small' />
        <MediumText style={{ marginHorizontal: 10, fontSize: 16 }}>
          {name}
        </MediumText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default MessageProfile
