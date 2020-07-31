import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import ProfilePicture from '../components/UI/ProfilePicture'
import MediumText from '../components/UI/MediumText'
import NormalText from '../components/UI/NormalText'
import StartButton from '../components/UI/StartButton'
import ReportModal from '../components/UI/ReportModal'

import Colours from '../constants/colours'

const MatchProfileScreen = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [subjects, setSubjects] = useState([
    'BUSS1020',
    'BUSS2000',
    'FINC2011',
    'FINC2012'
  ])

  return (
    <View style={styles.container}>
      <ReportModal
        modalOpen={modalOpen}
        backHandler={() => setModalOpen(false)}
      />
      <View style={styles.picture}>
        <ProfilePicture
          size='medium'
          uri='https://avataaars.io/png?topType=ShortHairTheCaesar&hairColor=Black&clotheType=BlazerSweater&skinColor=Pale&avatarStyle=Circle'
        />
      </View>
      <MediumText style={{ fontSize: 20 }}>Jimmy Johnson</MediumText>
      <View
        style={{
          width: 300,
          borderRadius: 10,
          alignItems: 'center',
          padding: 10,
          marginVertical: 20,
          backgroundColor: Colours.primary
        }}
      >
        <NormalText style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
          University of Sydney
        </NormalText>
      </View>
      <View
        style={{
          width: 300,
          borderRadius: 10,
          alignItems: 'center',
          padding: 10,
          marginBottom: 20,
          backgroundColor: Colours.primary
        }}
      >
        <NormalText style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
          Bachelor of Commerce
        </NormalText>
      </View>
      <View
        style={{
          width: 300,
          backgroundColor: Colours.primary,
          borderRadius: 10,
          alignItems: 'center',
          paddingTop: 15,
          paddingBottom: 20,
          marginBottom: 50
        }}
      >
        <NormalText
          style={{
            fontSize: 16,
            marginBottom: 5,
            alignItems: 'center',
            color: 'white'
          }}
        >
          Subjects
        </NormalText>
        <FlatList
          style={{ marginTop: 10 }}
          numColumns={2}
          keyExtractor={item => Math.random()}
          data={subjects}
          renderItem={({ item }) => (
            <View style={styles.subjectText}>
              <Text style={{ color: 'white' }}>{item}</Text>
            </View>
          )}
        />
      </View>
      <StartButton
        onPress={() => {
          setModalOpen(true)
        }}
        title='Report user'
        style={{ backgroundColor: 'red' }}
        textColour='white'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  picture: {
    marginTop: 50,
    marginBottom: 20
  },
  subjectText: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 3,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 30,
    width: 90
  }
})

export default MatchProfileScreen
