import * as React from 'react'
import { Text } from 'react-native'

export default function MediumText (props) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'Montserrat_500Medium' }]}
    />
  )
}
