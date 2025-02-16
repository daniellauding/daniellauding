// src/firebase.js
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	setPersistence,
	browserLocalPersistence,
} from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

console.log('Firebase Config:', {
	...firebaseConfig,
	apiKey: '[HIDDEN]',
	projectId: firebaseConfig.projectId,
});

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

console.log('Firebase initialized:', {
	app: !!app,
	auth: !!auth,
	db: !!db,
	storage: !!storage,
});

// Enable persistent auth state
setPersistence(auth, browserLocalPersistence)
	.then(() => console.log('Auth persistence enabled'))
	.catch((error) => console.error('Auth persistence error:', error));

export { app, auth, db, storage };
