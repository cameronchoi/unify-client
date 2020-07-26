import React from 'react'
import { View } from 'react-native'
import NormalText from '../components/NormalText'
import { FontAwesome5 } from '@expo/vector-icons'

const Logo = props => {
  return (
    <View>
      <FontAwesome5 {...props} name='user-friends' />
      <NormalText {...props}>unify</NormalText>
    </View>
  )
}

export default Logo
