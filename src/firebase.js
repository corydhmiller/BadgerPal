import { firebase } from "@firebase/app";
import "@firebase/firestore";

import FirebaseConfig from './assets/firebaseConfig'

const firebaseApp = firebase.initializeApp(FirebaseConfig)

export const db = firebaseApp.firestore()
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)
