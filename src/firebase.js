// src/firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDzCqwhB7TQ0Gh9b39sO619iPbTxEk00RE',
	authDomain: 'daniellauding-1a091.firebaseapp.com',
	databaseURL: 'https://daniellauding-1a091.firebaseio.com',
	projectId: 'daniellauding-1a091',
	storageBucket: 'daniellauding-1a091.appspot.com',
	messagingSenderId: '571286512736',
	appId: '1:571286512736:web:58b2fb5c85514b35848f05',
	measurementId: 'G-7FYY5ZS384',
};

const app = initializeApp(firebaseConfig);

export { app };
