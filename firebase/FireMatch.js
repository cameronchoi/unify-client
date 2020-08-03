import firebase from 'firebase' // 4.8.1

class FireMatch {
  constructor (email) {
    this.email = email
    this.init()
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyC34XSAkjcF9JBMptCC6WUwJ1eoToublw4',
        authDomain: 'unify-40e9b.firebaseapp.com',
        databaseURL: 'https://unify-40e9b.firebaseio.com',
        projectId: 'unify-40e9b',
        storageBucket: 'unify-40e9b.appspot.com',
        messagingSenderId: '721861398339',
        appId: '1:721861398339:web:3ee2cdb990e674a7cfe9f6',
        measurementId: 'G-RLMF7QHTJR'
      })
    }
  }

  get ref () {
    return firebase.firestore().collection('matches')
  }

  on = (callback, setLoading) => {
    return this.ref
      .where('users', 'array-contains', this.email)
      .orderBy('latestMessageTimestamp', 'desc')
      .onSnapshot(querySnapshot => {
        let results = []
        querySnapshot.forEach(doc => {
          let result = {
            key: doc.id,
            match: doc.data()
          }
          results.push(result)
        })
        callback(results)
        setLoading(false)
      })
  }

  get timestamp () {
    return firebase.firestore.Timestamp
  }
}

export default FireMatch
