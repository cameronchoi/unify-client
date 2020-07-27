import * as React from 'react'
import { Text } from 'react-native'

export default function Normal (props) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'Montserrat_400Regular' }]}
    />
  )
}
