import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ProfilePicture from '../components/UI/ProfilePicture'
import MediumText from '../components/UI/MediumText'
import StartButton from '../components/UI/StartButton'
import ReportModal from '../components/UI/ReportModal'

const MatchProfileScreen = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <View style={styles.container}>
      <ReportModal
        modalOpen={modalOpen}
        backHandler={() => setModalOpen(false)}
      />
      <ProfilePicture
        size='medium'
        uri='https://avataaars.io/png?topType=ShortHairTheCaesar&hairColor=Black&clotheType=BlazerSweater&skinColor=Pale&avatarStyle=Circle'
      />
      <MediumText style={{ fontSize: 20 }}>Jimmy Johnson</MediumText>
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
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MatchProfileScreen
