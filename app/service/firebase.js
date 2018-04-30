import * as firebase from 'firebase';
import '@firebase/firestore';

import { firebaseConfig } from '../config/firebase';

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true}; 
firestore.settings(settings);

export default firebase;