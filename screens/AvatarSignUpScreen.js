import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import SubmitButton from '../components/UI/SubmitButton'
import ProfilePicture from '../components/UI/ProfilePicture'
import MediumText from '../components/UI/MediumText'
import BackArrow from '../components/UI/BackArrow'
import AvatarModal from '../components/UI/AvatarModal'

export default function AvatarSignUpScreen ({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <View>
      <AvatarModal
        modalOpen={modalOpen}
        backHandler={() => setModalOpen(false)}
      />
      <BackArrow
        onPress={() => {
          navigation.goBack()
        }}
      />
      <MediumText style={styles.title}>Customise your avatar!</MediumText>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.test}
          onPress={() => setModalOpen(true)}
        >
          <ProfilePicture
            size='medium'
            uri='https://avataaars.io/png?topType=LongHairStraight&hairColor=Brown&clotheType=Hoodie&skinColor=Light&avatarStyle=Circle'
          />
        </TouchableOpacity>
        <SubmitButton
          onPress={() => {
            navigation.navigate('Welcome')
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
    marginTop: 20,
    marginBottom: 70
  }
})
