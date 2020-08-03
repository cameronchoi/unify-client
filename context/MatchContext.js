import React, { useReducer, createContext } from 'react'

export const MatchContext = createContext()

function reducer (prevState, action) {
  switch (action.type) {
    case 'SET_MATCH':
      return {
        ...prevState,
        matchEmail: action.email,
        fullName: action.fullName,
        uri: action.uri
      }
  }
}

export const MatchProvider = ({ children }) => {
  const [matchState, matchDispatch] = useReducer(reducer, {
    matchEmail: null,
    fullName: null,
    uri: null
  })

  return (
    <MatchContext.Provider value={[matchState, matchDispatch]}>
      {children}
    </MatchContext.Provider>
  )
}
