import React, { useEffect, useReducer, useMemo, createContext } from 'react'

export const SignUpContext = createContext()

function reducer (prevState, action) {
  switch (action.type) {
  }
}

export const SignUpProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    uniName: null,
    uniYear: 0,
    degree: null,
    subjects: []
  })
  return (
    <SignUpContext.Provider value={[state, dispatch]}>
      {children}
    </SignUpContext.Provider>
  )
}

export default SignUpContext
