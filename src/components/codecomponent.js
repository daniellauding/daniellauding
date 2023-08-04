// src/CodeComponent.js
import React, { useState, useEffect } from 'react';
import { app } from '../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const CodeComponent = () => {
	const [code, setCode] = useState(null);
	const [inputCode, setInputCode] = useState('');
	const [isCodeCorrect, setIsCodeCorrect] = useState(false);

	// Retrieve the code from Firestore on component mount
	useEffect(() => {
		const fetchData = async () => {
			const db = getFirestore(app);
			const docRef = doc(db, 'auth', 'appCode');
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setCode(docSnap.data().code);
			} else {
				console.log('No such document!');
			}
		};

		fetchData();
	}, []);

	const handleInputChange = (e) => {
		setInputCode(e.target.value);
	};

	const handleCheckCode = () => {
		setIsCodeCorrect(inputCode === code);
	};

	return (
		<div>
			<input type="text" value={inputCode} onChange={handleInputChange} />
			<button onClick={handleCheckCode}>Check Code</button>
			{isCodeCorrect && (
				<div>The part to show when the code is correct</div>
			)}
		</div>
	);
};

export default CodeComponent;
