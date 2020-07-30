import React, { useContext, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native'

import { AuthContext } from '../context/AuthContext'
import ProfilePicture from '../components/UI/ProfilePicture'
import MediumText from '../components/UI/MediumText'
import NormalText from '../components/UI/NormalText'

import AvatarModal from '../components/UI/AvatarModal'
import Colours from '../constants/colours'
import StartButton from '../components/UI/StartButton'
import { Card } from 'react-native-paper'

export default function ProfileScreen ({ navigation }) {
  const [state, dispatch] = useContext(AuthContext)
  const [modalOpen, setModalOpen] = useState(false)
  const [topType, setTopType] = useState('LongHairStraight')
  const [hairColour, setHairColour] = useState('Brown')
  const [clotheType, setClotheType] = useState('Hoodie')
  const [skinColour, setSkinColour] = useState('Light')
  const [subjects, setSubjects] = useState([
    'BUSS1000',
    'BUSS1020',
    'BUSS1030',
    'BUSS1040'
  ])

  return (
    <View style={styles.container}>
      <AvatarModal
        currentTopType={topType}
        currentHairColour={hairColour}
        currentClotheType={clotheType}
        currentSkinColour={skinColour}
        saveHandler={(topType, hairColour, clotheType, skinColour) => {
          setTopType(topType)
          setHairColour(hairColour)
          setClotheType(clotheType)
          setSkinColour(skinColour)
        }}
        modalOpen={modalOpen}
        backHandler={() => setModalOpen(false)}
      />
      <TouchableOpacity
        style={styles.picture}
        onPress={() => setModalOpen(true)}
      >
        <ProfilePicture
          size='medium'
          uri={`https://avataaars.io/png?topType=${topType}&hairColor=${hairColour}&clotheType=${clotheType}&skinColor=${skinColour}&avatarStyle=Circle`}
        />
      </TouchableOpacity>
      <MediumText style={{ fontSize: 20, marginBottom: 5 }}>
        Michelle Smith
      </MediumText>
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
          dispatch({ type: 'SIGN_OUT' })
        }}
        title='Sign Out'
        style={{
          backgroundColor: Colours.secondary,
          marginBottom: 100
        }}
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
    marginHorizontal: 30
  }
})
