import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDdQJbPwu57G1eEOtM2jR4e99gl4jf_7Wg',
  authDomain: 'image-gallery-194fc.firebaseapp.com',
  projectId: 'image-gallery-194fc',
  storageBucket: 'image-gallery-194fc.appspot.com',
  messagingSenderId: '496071581736',
  appId: '1:496071581736:web:9ef0777cc1d63eff17551d'

};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
