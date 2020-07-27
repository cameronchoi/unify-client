import * as React from 'react'
import { Text } from 'react-native'

import Fonts from '../../constants/fonts'

export default function MediumText (props) {
  return <Text {...props} style={[props.style, { fontFamily: Fonts.medium }]} />
}
