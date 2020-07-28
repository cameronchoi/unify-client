import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

import Fonts from '../../constants/fonts'

const ClotheTypePicker = ({ clotheType, setClotheType }) => {
  return (
    <DropDownPicker
      items={[
        { label: 'BlazerShirt', value: 'BlazerShirt' },
        { label: 'BlazerSweater', value: 'BlazerSweater' },
        { label: 'CollarSweater', value: 'CollarSweater' },
        { label: 'GraphicShirt', value: 'GraphicShirt' },
        { label: 'Hoodie', value: 'Hoodie' },
        { label: 'Overall', value: 'Overall' },
        { label: 'ShirtCrewNeck', value: 'ShirtCrewNeck' },
        { label: 'ShirtScoopNeck', value: 'ShirtScoopNeck' },
        { label: 'ShirtVNeck', value: 'ShirtVNeck' }
      ]}
      defaultValue={clotheType}
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
      onChangeItem={item => setClotheType(item.value)}
      labelStyle={{ fontFamily: Fonts.normal }}
    />
  )
}

export default ClotheTypePicker
