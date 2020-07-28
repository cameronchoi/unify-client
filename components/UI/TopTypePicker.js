import React from 'react'
import { Picker } from '@react-native-community/picker'
import DropDownPicker from 'react-native-dropdown-picker'

import Fonts from '../../constants/fonts'

const TopTypePicker = ({ topType, setTopType }) => {
  return (
    <DropDownPicker
      items={[
        { label: 'No Hair', value: 'NoHair' },
        { label: 'Hat', value: 'Hat' },
        { label: 'Turban', value: 'Turban' },
        { label: 'Hijab', value: 'Hijab' },
        { label: 'Long Hair Big Hair', value: 'LongHairBigHair' },
        { label: 'Long Hair Bob', value: 'LongHairBob' },
        { label: 'Long Hair Bun', value: 'LongHairBun' },
        { label: 'Long Hair Curly', value: 'LongHairCurly' },
        { label: 'Long Hair Dreads', value: 'LongHairDreads' },
        { label: 'Long Hair Fro', value: 'LongHairFro' },
        { label: 'Long Hair Fro Band', value: 'LongHairFroBand' },
        { label: 'Long Hair Not Too Long', value: 'LongHairNotTooLong' },
        { label: 'Long Hair Shaved Sides', value: 'LongHairShavedSides' },
        { label: 'Long Hair Straight', value: 'LongHairStraight' },
        { label: 'Long Hair Straight 2', value: 'LongHairStraight2' },
        { label: 'Long Hair Strand', value: 'LongHairStrand' },
        { label: 'Short Hair Dreads 1', value: 'ShortHairDreads01' },
        { label: 'Short Hair Dreads 2', value: 'ShortHairDreads02' },
        { label: 'Short Hair Frizzle', value: 'ShortHairFrizzle' },

        { label: 'Short Hair Shaggy Mullet', value: 'ShortHairShaggyMullet' },
        { label: 'Short Hair Short Curly', value: 'ShortHairShortCurly' },
        { label: 'Short Hair Short Flat', value: 'ShortHairShortFlat' },
        { label: 'Short Hair Short Round', value: 'ShortHairShortRound' },
        { label: 'Short Hair Short Waved', value: 'ShortHairShortWaved' },
        { label: 'Short Hair Sides', value: 'ShortHairSides' },
        { label: 'Short Hair The Caesar', value: 'ShortHairTheCaesar' },

        {
          label: 'Short Hair The Caesar Side Part',
          value: 'ShortHairTheCaesarSidePart'
        }
      ]}
      defaultValue={topType}
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
      onChangeItem={item => setTopType(item.value)}
      labelStyle={{ fontFamily: Fonts.normal }}
    />
  )
}

export default TopTypePicker
