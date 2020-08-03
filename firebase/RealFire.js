import firebase from 'firebase' // 4.8.1

class Fire {
  constructor (id) {
    this.db = firebase
      .firestore()
      .collection('matches')
      .doc(id)
      .collection('messages')
    this.init(id)
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

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.data()
    const { key: _id } = snapshot
    const timestamp = new Date(numberStamp)
    const message = {
      _id,
      timestamp,
      text,
      user
    }
    return message
  }

  //   on = callback =>
  //     this.ref
  //       .limitToLast(20)
  //       .on('child_added', snapshot => callback(this.parse(snapshot)))

  get timestamp () {
    return firebase.database.ServerValue.TIMESTAMP
  }
  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i]
      const message = {
        text,
        user,
        timestamp: this.timestamp
      }
      this.db.add(message)
    }
  }
}

export default Fire
