import React, { useState, createContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {}
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { username: 'bob.smith' }
          //   const fakeUser = null
          setUser(fakeUser)
          AsyncStorage.setItem('user', JSON.stringify(fakeUser))
        },
        logout: () => {
          console.log('Does it come here?')
          setUser(null)
          AsyncStorage.removeItem('user')
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
