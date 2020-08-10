import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

import Fonts from '../../constants/fonts'

const HairColourPicker = ({ hairColour, setHairColour }) => {
  return (
    <DropDownPicker
      items={[
        { label: 'Auburn', value: 'Auburn' },
        { label: 'Black', value: 'Black' },
        { label: 'Blonde', value: 'Blonde' },
        { label: 'Blonde Golden', value: 'BlondeGolden' },
        { label: 'Brown', value: 'Brown' },
        { label: 'Brown Dark', value: 'BrownDark' },
        { label: 'Pastel Pink', value: 'PastelPink' },
        { label: 'Platinum', value: 'Platinum' },
        { label: 'Red', value: 'Red' },
        { label: 'Silver Gray', value: 'SilverGray' }
      ]}
      isVisible={false}
      defaultValue={hairColour}
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
      onChangeItem={item => setHairColour(item.value)}
      labelStyle={{ fontFamily: Fonts.normal }}
    />
  )
}

export default HairColourPicker
