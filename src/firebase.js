import Firebase from 'firebase'
import Firestore from '@firebase/firestore'
import FirebaseConfig from './assets/firebaseConfig'

const firebaseApp = Firebase.initializeApp(FirebaseConfig);

const db = firebaseApp.firestore()
const settings = {timestampsInSnapshots: true}
db.settings(settings)

export {
  db
}