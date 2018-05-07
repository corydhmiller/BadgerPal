import Firebase from 'firebase'
import FirebaseConfig from './assets/firebaseConfig'

const firebaseApp = Firebase.initializeApp(FirebaseConfig);

export const db = firebaseApp.database()
export const namesRef = db.ref('names')