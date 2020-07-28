import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

import Fonts from '../../constants/fonts'

const SkinColourPicker = ({ skinColour, setSkinColour }) => {
  return (
    <DropDownPicker
      items={[
        { label: 'Tanned', value: 'Tanned' },
        { label: 'Yellow', value: 'Yellow' },
        { label: 'Pale', value: 'Pale' },
        { label: 'Light', value: 'Light' },
        { label: 'Brown', value: 'Brown' },
        { label: 'DarkBrown', value: 'DarkBrown' },
        { label: 'Black', value: 'Black' }
      ]}
      defaultValue={skinColour}
      containerStyle={{
        height: 60,
        width: '80%',
        marginTop: 20,
        marginBottom: 30
      }}
      style={{ backgroundColor: '#fafafa' }}
      itemStyle={{
        justifyContent: 'flex-start'
      }}
      dropDownStyle={{ backgroundColor: '#fafafa' }}
      onChangeItem={item => setSkinColour(item.value)}
      labelStyle={{ fontFamily: Fonts.normal }}
    />
  )
}

export default SkinColourPicker
