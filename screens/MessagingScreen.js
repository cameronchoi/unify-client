import React, { useState, useEffect, useCallback } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

export default function MessagingScreen () {
  const [messages, setMessages] = useState([])
  const chat = (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1
      }}
    />
  )

  useEffect(() => {
    // change to actually request
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    )
  }, [])

  return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
}
