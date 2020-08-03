import firebase from 'firebase' // 4.8.1

class Fire {
  constructor () {
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

  set ref (matchId) {
    firebase
      .firestore()
      .collection('matches')
      .doc(matchId)
      .collection('messages')
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val()
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

  listen = callback => {
    this.ref.onSnapshot(function (doc) {
      console.log('Current data: ', doc.data())
    })
  }

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)))

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
      this.append(message)
    }
  }

  append = message => this.ref.push(message)

  // close the connection to the Backend
  off () {
    this.ref.off()
  }
}

Fire.shared = new Fire()
export default Fire
