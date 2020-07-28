import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

import Fonts from '../../constants/fonts'

const ClotheTypePicker = ({ clotheType, setClotheType }) => {
  return (
    <DropDownPicker
      items={[
        { label: 'Blazer Shirt', value: 'BlazerShirt' },
        { label: 'Blazer Sweater', value: 'BlazerSweater' },
        { label: 'Collar Sweater', value: 'CollarSweater' },
        { label: 'Graphic Shirt', value: 'GraphicShirt' },
        { label: 'Hoodie', value: 'Hoodie' },
        { label: 'Overall', value: 'Overall' },
        { label: 'Crew Neck', value: 'ShirtCrewNeck' },
        { label: 'Scoop Neck', value: 'ShirtScoopNeck' },
        { label: 'V-neck', value: 'ShirtVNeck' }
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
