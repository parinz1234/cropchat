import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDPus1CLe8NLLHqBfUuCF_IYWd_Rw_q6Rc',
  authDomain: 'cropcat-b852a.firebaseapp.com',
  databaseURL: 'https://cropcat-b852a.firebaseio.com',
  projectId: 'cropcat-b852a',
  storageBucket: 'cropcat-b852a.appspot.com',
  messagingSenderId: '262859069390'
}
firebase.initializeApp(config)
export default {
  database: firebase.database()
}
