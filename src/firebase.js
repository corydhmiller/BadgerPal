import Firebase from 'firebase'
import Firestore from '@firebase/firestore'
import FirebaseConfig from './assets/firebaseConfig'

const firebaseApp = Firebase.initializeApp(FirebaseConfig);

export const db = firebaseApp.firestore()