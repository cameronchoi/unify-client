import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import SubmitButton from '../components/UI/SubmitButton'
import DropDownPicker from 'react-native-dropdown-picker'
import MediumText from '../components/UI/MediumText'
import BackArrow from '../components/UI/BackArrow'

import Fonts from '../constants/fonts'

export default function UniYearSignUpScreen ({ navigation }) {
  const [year, setYear] = useState(null)
  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack()
        }}
      />
      <MediumText style={styles.title}>My am in...</MediumText>
      <View style={{ alignItems: 'center' }}>
        <DropDownPicker
          items={[
            {
              label: 'First Year',
              value: '1'
            },
            {
              label: 'Second Year',
              value: '2'
            },
            {
              label: 'Third Year',
              value: '3'
            },
            {
              label: 'Fourth Year',
              value: '4'
            },
            {
              label: 'Fifth Year',
              value: '5'
            }
          ]}
          placeholder='Year in University'
          defaultValue={year}
          containerStyle={{
            height: 60,
            width: '80%',
            marginTop: 20,
            marginBottom: 60
          }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeTextItem={item => setYear(item.value)}
          labelStyle={{ fontFamily: Fonts.medium }}
        />
        <SubmitButton
          onPress={() => {
            navigation.navigate('DegreeSignUp')
          }}
        >
          Continue
        </SubmitButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 20, marginLeft: 30, marginTop: 20 },
  test: {
    marginTop: 40,
    marginBottom: 70
  }
})
