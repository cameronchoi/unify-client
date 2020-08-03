// @flow
import React, { useState, useContext, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat' // 0.3.0
import { MatchContext } from '../context/MatchContext'
import firebase from 'firebase'

import Fire from '../firebase/Fire'
import RealFire from '../firebase/RealFire'
import { View } from 'react-native'

const MessagingScreen = props => {
  const [messages, setMessages] = useState([])
  const [matchState] = useContext(MatchContext)
  let fire1 = new RealFire(matchState.id)

  const parse = doc => {
    const { timestamp, text, user } = doc.data()
    // const { key: _id } = doc.id
    const newTime = timestamp.toDate()
    const message = {
      _id: doc.id,
      createdAt: newTime,
      text,
      user
    }
    return message
  }

  useEffect(() => {
    let unsubscribe = fire1.db
      .orderBy('timestamp', 'desc')
      .onSnapshot(querySnapshot => {
        let results = []
        querySnapshot.forEach(doc => {
          results.push(parse(doc))
        })
        setMessages(results)
      })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <GiftedChat
        messages={messages}
        onSend={messages => {
          for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i]
            const message = {
              text,
              user,
              timestamp: firebase.firestore.Timestamp.now()
            }
            fire1.db.add(message)
          }
        }}
        user={{
          _id: matchState.matchEmail,
          name: matchState.fullName,
          avatar: matchState.uri
        }}
      />
    </View>
  )
}

export default MessagingScreen

// class Chat extends React.Component {
//   state = {
//     messages: []
//   }

//   get user () {
//     return {
//       _id: 1
//     }
//   }

//   render () {
//     return (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={Fire.send}
//         user={this.user}
//       />
//     )
//   }

//   componentDidMount () {
//     console.log(this.state.messages)
//     Fire.on(message => {
//       console.log(message)
//       this.setState(previousState => {
//         // console.log('-----------')
//         // console.log(previousState)
//         // console.log('-----------')
//         console.log(GiftedChat.append(previousState.messages, message))
//         return {
//           messages: GiftedChat.append(previousState.messages, message)
//         }
//       })
//     })
//     console.log(this.state.messages)
//   }
//   componentWillUnmount () {
//     Fire.off()
//   }
// }

// export default Chat
