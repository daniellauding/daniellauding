import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import emailjs from '@emailjs/browser';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration (place this outside the component)
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase (place this outside the component)
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

const ContactForm = ({ closeContactModal }) => {
	const [formState, setFormState] = useState({
		projectName: '',
		'project-description': `Project Overview:
• Current situation: 
• Main challenge: 
• Desired outcome: 

Timeline:
• Start date: 
• Expected duration: 

Key Requirements:
• Must have:
• Nice to have:

Additional Context:
• Target audience:
• Key stakeholders:
• Technical constraints:`,
		helpType: '',
		helpTypeOther: '',
		'project-type': '',
		'project-type-other': '',
		deliverables: '',
		deliverablesOther: '',
		budget: '',
		budgetOther: '',
		'price-other': '',
		'full-name': '',
		'company-name': '',
		email: '',
		files: []
	});

	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [formErrors, setFormErrors] = useState({});
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
		if (formErrors[e.target.name]) {
			setFormErrors((prev) => ({ ...prev, [e.target.name]: '' }));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...formState }),
		})
			.then(() => {
				setSubmitted(true);
				setSubmitting(false);
			})
			.catch((error) => {
				console.error(error);
				setSubmitting(false);
			});
	};

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) +
					'=' +
					encodeURIComponent(data[key])
			)
			.join('&');
	};

	return (
		<div>
			{error ? (
				<div className="text-red-500 p-4 rounded bg-red-50 mb-4">
					<h3 className="font-bold">Error</h3>
					<p>{error}</p>
					<button 
						onClick={() => setError(null)}
						className="mt-2 text-sm text-red-700 underline"
					>
						Try Again
					</button>
				</div>
			) : submitted ? (
				<div className="flex gap-2 flex-col">
					<p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
						Thank you for contacting me!
					</p>
					<button
						onClick={closeContactModal}
						className="bg-primary w-fit hover:primary text-white font-bold py-2 px-4 mt-8 rounded-full cursor-pointer"
					>
						Dismiss
					</button>
				</div>
			) : (
				<div>
					<p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
						Contact me with anything
					</p>
					<form
						name="contact"
						method="post"
						data-netlify="true"
						onSubmit={handleSubmit}
					>
						<input type="hidden" name="contact" value="contact" />

						<div className="flex gap-8 flex-col">
							<p>
								<label className="text-left">
									Your Name:
									<input
										type="text"
										name="full-name"
										placeholder="Full name"
										value={formState['full-name']}
										required
										onChange={handleChange}
										className="border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
									/>
								</label>
							</p>
							<p>
								<label className="text-left">
									Your Company:
									<input
										type="text"
										name="company-name"
										placeholder="Company name"
										value={formState['company-name']}
										required
										onChange={handleChange}
										className="border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
									/>
								</label>
							</p>
							<p>
								<label className="text-left">
									Your Email:
									<input
										type="email"
										name="email"
										placeholder="E-mail"
										value={formState.email}
										required
										onChange={handleChange}
										className={`border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black ${
											formErrors.email
												? 'border-red-500'
												: ''
										}`}
									/>
								</label>
							</p>
							<p>
								<label className="text-left">
									Message:
									<textarea
										name="project-description"
										value={formState['project-description']}
										required
										onChange={handleChange}
										className="border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
									/>
								</label>
							</p>
						</div>
						<p>
							<button
								type="submit"
								disabled={submitting || submitted}
								className="bg-primary hover:primary text-white font-bold py-2 px-4 mt-8 rounded-full cursor-pointer"
							>
								Send
							</button>
						</p>
					</form>
					<div className="text-center mt-4">
						<div className="flex items-center justify-center gap-4">
							<a
								href="https://calendly.com/daniellauding"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:text-primary-dark underline"
							>
								Or book an appointment
							</a>
							<button
								type="button"
								onClick={() => {
									closeContactModal();
									window.location.hash = 'newproject';
								}}
								className="text-primary hover:text-primary-dark underline"
							>
								Open to Work
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const OffertForm = ({ closeOffertModal }) => {
	const [formState, setFormState] = useState({
		name: '',
		company: '',
		email: '',
		message: `I have this project`,
		file: null,
	});

	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);

		const formData = new FormData();
		formData.append('form-name', 'offert');
		formData.append('name', formState.name);
		formData.append('company', formState.company);
		formData.append('email', formState.email);
		formData.append('message', formState.message);
		formData.append('file', formState.file);

		fetch('/', {
			method: 'POST',
			body: formData, // Use formData here, not the encoded string
		})
			.then(() => {
				setSubmitted(true);
				setSubmitting(false);
			})
			.catch((error) => {
				console.error(error);
				setSubmitting(false);
			});
	};

	const handleFileChange = (e) => {
		setFormState({ ...formState, file: e.target.files[0] });
	};

	return (
		<div>
			{submitted ? (
				<div className="flex gap-2 flex-col">
					<p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
						Thank you for asking me!
					</p>
					<button
						onClick={closeOffertModal}
						className="bg-primary w-fit hover:primary text-white font-bold py-2 px-4 mt-8 rounded-full cursor-pointer"
					>
						Dismiss
					</button>
				</div>
			) : (
				<div>
					<p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
						Give me a project
					</p>
					<form
						name="offert"
						method="post"
						data-netlify="true"
						onSubmit={handleSubmit}
					>
						<input type="hidden" name="offert" value="offert" />

						<div className="flex gap-8 flex-col">
							<p>
								<label className="text-left">
									Your Name:
									<input
										type="text"
										name="name"
										placeholder="Full name"
										value={formState.name}
										required
										onChange={handleChange}
										className="border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
									/>
								</label>
							</p>
							<p>
								<label className="text-left">
									Your Company:
									<input
										type="text"
										name="company"
										placeholder="Company name"
										value={formState.company}
										required
										onChange={handleChange}
										className="border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
									/>
								</label>
							</p>
							<p>
								<label className="text-left">
									Your Email:
									<input
										type="email"
										name="email"
										placeholder="E-mail"
										value={formState.email}
										required
										onChange={handleChange}
										className="border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
									/>
								</label>
							</p>
							<p>
								<div className="relative">
									<label className="text-left">
										Upload File:
										<input
											type="file"
											name="file"
											onChange={handleFileChange}
											className="border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
										/>
									</label>
									<div
										className="cursor-pointer bg-gray-500 hover:bg-gray-600 text-black font-semibold py-2 px-4 rounded inline-flex items-center text-sm"
										style={{
											transform: 'translateY(-48px)',
											padding: '8px 12px',
											textWrap: 'nowrap',
											pointerEvents: 'none',
										}}
									>
										Upload file
									</div>
								</div>
							</p>
							<p>
								<label className="text-left">
									Message:
									<textarea
										name="message"
										value={formState.message}
										required
										onChange={handleChange}
										className="border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
									/>
								</label>
							</p>
							<a
								href="https://calendly.com/daniellauding"
								target="_blank"
								rel="noreferrer"
								className="text-primary underline"
							>
								Book appointment?
							</a>
						</div>
						<p>
							<button
								type="submit"
								disabled={submitting || submitted}
								className="bg-primary hover:primary text-white font-bold py-2 px-4 mt-8 rounded-full cursor-pointer"
							>
								Send
							</button>
						</p>
					</form>
				</div>
			)}
		</div>
	);
};

const RequestForm = ({ closeRequestModal, item }) => {
	const [formState, setFormState] = useState({
		name: '',
		company: '',
		email: '',
		client: item?.client,
		project: item?.title,
		message: `I want to see more about ${
			(item?.client ? `"${item.client}` : '') +
			(item?.title ? ` – ${item.title}` : '')
		}" please send me a code`,
	});

	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [formErrors, setFormErrors] = useState({});

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
		if (formErrors[e.target.name]) {
			setFormErrors((prev) => ({ ...prev, [e.target.name]: '' }));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'request', ...formState }),
		})
			.then(() => {
				setSubmitted(true);
				setSubmitting(false);
			})
			.catch((error) => {
				console.error(error);
				setSubmitting(false);
			});
	};

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) +
					'=' +
					encodeURIComponent(data[key])
			)
			.join('&');
	};

	return (
		<div>
			{submitted ? (
				<div className="flex gap-2 flex-col">
					<p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
						Thank you for your request!
					</p>
					<button
						onClick={closeRequestModal}
						className="bg-primary hover:primary w-fit text-white font-bold py-2 px-4 mt-8 rounded-full cursor-pointer"
					>
						Dismiss
					</button>
				</div>
			) : (
				<div>
					<p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
						In order to access this case, you will need to provide
						your contact information. This is due to the
						non-confidentiality agreement associated with the case.
						Once your information is submitted and has been
						processed, an access code will be sent to the provided
						email.
					</p>
					<form
						name="request"
						method="post"
						data-netlify="true"
						onSubmit={handleSubmit}
					>
						<input type="hidden" name="request" value="request" />
						<input
							type="hidden"
							name="client"
							value={formState.client}
						/>
						<input
							type="hidden"
							name="project"
							value={formState.project}
						/>

						<div className="flex gap-8 flex-col">
							<p>
								<label className="text-left">
									Your Name:
									<input
										type="text"
										name="name"
										placeholder="Full name"
										value={formState.name}
										required
										onChange={handleChange}
										className="border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
									/>
								</label>
							</p>
							<p>
								<label className="text-left">
									Your Company:
									<input
										type="text"
										name="company"
										placeholder="Company name"
										value={formState.company}
										required
										onChange={handleChange}
										className="border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
									/>
								</label>
							</p>
							<p>
								<label className="text-left">
									Your Email:
									<input
										type="email"
										name="email"
										placeholder="E-mail"
										value={formState.email}
										required
										onChange={handleChange}
										className={`border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black ${
											formErrors.email
												? 'border-red-500'
												: ''
										}`}
									/>
								</label>
							</p>
							<p>
								<label className="text-left">
									Message:
									<textarea
										name="message"
										value={formState.message}
										required
										onChange={handleChange}
										className="border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
									/>
								</label>
							</p>
						</div>
						<p>
							<button
								type="submit"
								disabled={submitting || submitted}
								className="bg-primary hover:primary text-white font-bold py-2 px-4 mt-8 rounded-full cursor-pointer"
							>
								Request access
							</button>
						</p>
					</form>
				</div>
			)}
		</div>
	);
};

const NewProjectForm = ({ closeModal, openPortfolio }) => {
	// Add a constant for the initial template
	const initialTemplate = `Project Overview:
• Current situation: 
• Main challenge: 
• Desired outcome: 

Timeline:
• Start date: 
• Expected duration: 

Key Requirements:
• Must have:
• Nice to have:

Additional Context:
• Target audience:
• Key stakeholders:
• Technical constraints:`;

	// Single formState declaration with initialTemplate
	const [formState, setFormState] = useState({
		projectName: '',
		'project-description': initialTemplate,
		helpType: '',
		helpTypeOther: '',
		'project-type': '',
		'project-type-other': '',
		deliverables: '',
		deliverablesOther: '',
		budget: '',
		budgetOther: '',
		'price-other': '',
		'full-name': '',
		'company-name': '',
		email: '',
		files: []
	});

	// Rest of the state declarations
	const [currentSlide, setCurrentSlide] = useState(0);
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [formErrors, setFormErrors] = useState({});
	const [editingHelpType, setEditingHelpType] = useState(false);
	const [editingProjectType, setEditingProjectType] = useState(false);
	const [editingDeliverables, setEditingDeliverables] = useState(false);
	const [newTagValue, setNewTagValue] = useState('');
	const [error, setError] = useState(null);

	// Create a navigation helper
	const goToSlide = (slideNumber) => {
		if (slideNumber > currentSlide) {
			// Only validate when going forward
			if (!validateSlide(currentSlide)) {
				// Instead of alert, just return - errors will be shown inline
				return;
			}
		}
		setCurrentSlide(slideNumber);
	};

	const handleChange = (e) => {
		const { name, value, type, options } = e.target;

		if (type === 'select-multiple') {
			const selectedOptions = Array.from(options)
				.filter((option) => option.selected)
				.map((option) => option.value);
			setFormState((prev) => ({ ...prev, [name]: selectedOptions }));
		} else {
			setFormState((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleFileChange = (e) => {
		setFormState((prev) => ({
			...prev,
			files: Array.from(e.target.files),
		}));
	};

	// Update the handleSubmit function to handle file uploads
	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		try {
			// Upload files to Firebase if any
			let fileUrls = [];
			if (formState.files.length > 0) {
				for (const file of formState.files) {
					try {
						if (file.size > 10 * 1024 * 1024) {
							throw new Error(`File ${file.name} is too large. Maximum size is 10MB`);
						}

						const storageRef = ref(storage, `project-files/${Date.now()}-${file.name}`);
						await uploadBytes(storageRef, file);
						const url = await getDownloadURL(storageRef);
						fileUrls.push(url);
					} catch (uploadError) {
						console.error('File upload error:', uploadError);
						throw new Error(`Failed to upload ${file.name}: ${uploadError.message}`);
					}
				}
			}

			// Prepare data for Firestore with complete budget information
			const projectData = {
				projectName: formState.projectName,
				projectDescription: formState['project-description'],
				helpTypes: formState.helpType ? formState.helpType.split(',').filter(Boolean) : [],
				projectTypes: formState['project-type'] ? formState['project-type'].split(',').filter(Boolean) : [],
				deliverables: formState.deliverables ? formState.deliverables.split(',').filter(Boolean) : [],
				budget: {
					range: formState.budget,
					description: formState.budgetOther || '',    // Include budget description
					exactAmount: formState['price-other'] || '', // Include exact amount
				},
				contact: {
					fullName: formState['full-name'],
					company: formState['company-name'],
					email: formState.email
				},
				fileUrls,
				createdAt: new Date(),
				status: 'new'
			};

			console.log('Submitting complete project data:', projectData);

			// Save to Firestore
			const docRef = await addDoc(collection(db, 'projectRequests'), projectData);
			console.log('Document written with ID:', docRef.id);

			setSubmitted(true);
			setSubmitting(false);

		} catch (error) {
			console.error('Submission error:', error);
			setSubmitting(false);
			alert(`Error submitting form: ${error.message}. Please try again or contact support.`);
		}
	};

	// Add validation for budget fields
	const validateSlide = (slideNumber) => {
		const errors = {};
		console.log('Validating slide:', slideNumber);
		console.log('Current form state:', formState);

		switch (slideNumber) {
			case 0:
				// Intro slide - no validation needed
				break;
			case 1:
				// Previous work slide - no validation needed
				break;
			case 2:
				if (!formState.projectName) {
					errors.projectName = 'Project name is required';
				}
				if (!formState.helpType) {
					errors.helpType = 'Please select what you need help with';
				}
				if (!formState['project-description'] || 
					formState['project-description'] === initialTemplate) {
					errors['project-description'] = 'Please describe your project';
				}
				if (!formState['project-type']) {
					errors['project-type'] = 'Please select a project type';
				}
				break;
			case 3:
				if (!formState.deliverables) {
					errors.deliverables = 'Please select at least one deliverable';
				}
				if (!formState.budget) {
					errors.budget = 'Please select a budget range';
				}
				if (formState.budget === 'Other') {
					if (!formState.budgetOther) {
						errors.budgetOther = 'Please describe your budget range';
					}
					if (!formState['price-other']) {
						errors['price-other'] = 'Please specify an exact amount';
					}
				}
				break;
			case 4:
				if (form && form['full-name'] && !form['full-name'].value) {
					errors.fullName = 'Full name is required';
				}
				if (form && form.email && !form.email.value) {
					errors.email = 'Email is required';
				}
				break;
			default:
				break;
		}

		console.log('Validation errors:', errors);
		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	// Update the tag selection handlers
	const handleHelpTypeSelect = (option) => {
		console.log('Selecting help type:', option);
		const currentTypes = formState.helpType ? formState.helpType.split(',').filter(Boolean) : [];
		const newTypes = currentTypes.includes(option)
				? currentTypes.filter(t => t !== option)
				: [...currentTypes, option];
		console.log('New help types:', newTypes);
		setFormState(prev => ({
			...prev,
			helpType: newTypes.join(',')
		}));
	};

	const handleProjectTypeSelect = (option) => {
		console.log('Selecting project type:', option);
		const currentTypes = formState['project-type'] ? formState['project-type'].split(',').filter(Boolean) : [];
		const newTypes = currentTypes.includes(option)
				? currentTypes.filter(t => t !== option)
				: [...currentTypes, option];
		console.log('New project types:', newTypes);
		setFormState(prev => ({
			...prev,
			'project-type': newTypes.join(',')
		}));
	};

	// Add new handlers for tag editing
	const handleAddNewTag = (type) => {
		if (type === 'help') {
			setEditingHelpType(true);
			setTimeout(() => document.getElementById('newHelpTypeInput')?.focus(), 0);
		} else {
			setEditingProjectType(true);
			setTimeout(() => document.getElementById('newProjectTypeInput')?.focus(), 0);
		}
	};

	const handleNewTagSubmit = (type, value) => {
		if (!value.trim()) return;
		
		const trimmedValue = value.trim();
		
		if (type === 'help') {
			const currentTypes = formState.helpType ? formState.helpType.split(',').filter(Boolean) : [];
			if (!currentTypes.includes(trimmedValue)) {
				const newValue = [...currentTypes, trimmedValue].join(',');
				setFormState(prev => ({
					...prev,
					helpType: newValue
				}));
			}
			setEditingHelpType(false);
		} else if (type === 'project') {
			const currentTypes = formState['project-type'] ? formState['project-type'].split(',').filter(Boolean) : [];
			if (!currentTypes.includes(trimmedValue)) {
				const newValue = [...currentTypes, trimmedValue].join(',');
				setFormState(prev => ({
					...prev,
					'project-type': newValue
				}));
			}
			setEditingProjectType(false);
		} else if (type === 'deliverables') {
			const currentDeliverables = formState.deliverables ? formState.deliverables.split(',').filter(Boolean) : [];
			if (!currentDeliverables.includes(trimmedValue)) {
				const newValue = [...currentDeliverables, trimmedValue].join(',');
				setFormState(prev => ({
					...prev,
					deliverables: newValue
				}));
			}
			setEditingDeliverables(false);
		}
		setNewTagValue('');
	};

	// Update the tag selection handlers
	const handleDeliverablesSelect = (option) => {
		console.log('Selecting deliverable:', option);
		const currentDeliverables = formState.deliverables ? formState.deliverables.split(',').filter(Boolean) : [];
		const newDeliverables = currentDeliverables.includes(option)
				? currentDeliverables.filter(d => d !== option)
				: [...currentDeliverables, option];
		console.log('New deliverables:', newDeliverables);
		setFormState(prev => ({
			...prev,
			deliverables: newDeliverables.join(',')
		}));
	};

	// Add handleRemoveTag function
	const handleRemoveTag = (type, tagToRemove) => {
		console.log(`Removing tag: ${tagToRemove} from ${type}`);
		
		if (type === 'help') {
			const currentTypes = formState.helpType ? formState.helpType.split(',').filter(Boolean) : [];
			setFormState(prev => ({
				...prev,
				helpType: currentTypes.filter(tag => tag !== tagToRemove).join(',')
			}));
		} else if (type === 'project') {
			const currentTypes = formState['project-type'] ? formState['project-type'].split(',').filter(Boolean) : [];
			setFormState(prev => ({
				...prev,
				'project-type': currentTypes.filter(tag => tag !== tagToRemove).join(',')
			}));
		} else if (type === 'deliverables') {
			const currentDeliverables = formState.deliverables ? formState.deliverables.split(',').filter(Boolean) : [];
			setFormState(prev => ({
				...prev,
				deliverables: currentDeliverables.filter(tag => tag !== tagToRemove).join(',')
			}));
		}
	};

	return (
		<div className="text-gray-800 h-full">
			{error ? (
				<div className="text-red-500 p-4 rounded bg-red-50 mb-4">
					<h3 className="font-bold">Error</h3>
					<p>{error}</p>
					<button 
						onClick={() => setError(null)}
						className="mt-2 text-sm text-red-700 underline"
					>
						Try Again
					</button>
				</div>
			) : submitted ? (
				<SuccessMessage closeModal={closeModal} />
			) : (
				<div className="h-full">
					<form
						name="newproject"
						method="POST"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						encType="multipart/form-data"
						onSubmit={handleSubmit}
						className="relative h-full"
					>
						<input
							type="hidden"
							name="form-name"
							value="newproject"
						/>
						<input type="hidden" name="bot-field" />

						{/* Add progress bar */}
						<div className="w-full bg-gray-200 h-2 rounded-full mb-6">
							<div
								className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out"
								style={{
									width: `${(currentSlide / 4) * 100}%`,
								}}
							></div>
						</div>

						{/* Progress steps */}
						<div className="flex justify-between mb-8 px-2">
							<div
								className={`text-sm ${
									currentSlide >= 0
										? 'text-primary'
										: 'text-gray-400'
								}`}
							>
								Intro
							</div>
							<div
								className={`text-sm ${
									currentSlide >= 1
										? 'text-primary'
										: 'text-gray-400'
								}`}
							>
								Work
							</div>
							<div
								className={`text-sm ${
									currentSlide >= 2
										? 'text-primary'
										: 'text-gray-400'
								}`}
							>
								Project
							</div>
							<div
								className={`text-sm ${
									currentSlide >= 3
										? 'text-primary'
										: 'text-gray-400'
								}`}
							>
								Details
							</div>
							<div
								className={`text-sm ${
									currentSlide >= 4
										? 'text-primary'
										: 'text-gray-400'
								}`}
							>
								Contact
							</div>
						</div>

						<Carousel
							selectedItem={currentSlide}
							onChange={(index) => {
								setCurrentSlide(index);
							}}
							showArrows={false}
							showStatus={false}
							showThumbs={false}
							showIndicators={false}
							swipeable={false}
							emulateTouch={false}
							className="custom-carousel h-full overflow-y-scroll pb-16"
						>
							{/* Slide 0: Introduction */}
							<div className="flex flex-col h-full slide-intro">
								{/* Badge */}
								<div className="mb-6">
									<div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20 shadow-sm">
										<span>
											Ready to transform your idea into reality? 
											<span className="ml-1">🚀</span>
										</span>
									</div>
								</div>

								<div className="space-y-8">
									{/* Main Value Proposition */}
									<div className="space-y-4">
										<p className="text-gray-600 leading-relaxed">
											I bridge design and development to create exceptional digital experiences. With 12+ years of expertise, I help businesses transform ideas into market-ready solutions. Founder experience + enterprise expertise = Unique approach to building successful digital products.
										</p>
									</div>

									<h4 className="text-md font-medium text-gray-900 mt-6">What I Do Best</h4>

									{/* Services Grid */}
									<div className="md:grid md:grid-cols-2 gap-4">
										<div className="p-4 bg-gray-50 rounded-lg">
											<div className="flex flex-col items-center gap-2 mb-2 text-primary">
												<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
													<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
													<path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
												</svg>
												<span className="font-medium">Design Systems & UI/UX</span>
											</div>
											<p className="text-sm text-gray-600">
												Building scalable, intuitive, and visually compelling experiences. Early adopter of Figma & modern design tools.
											</p>
										</div>

										<div className="p-4 bg-gray-50 rounded-lg">
											<div className="flex flex-col items-center gap-2 mb-2 text-primary">
												<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
													<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
													<path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"/>
												</svg>
												<span className="font-medium">Hands-On Approach</span>
											</div>
											<p className="text-sm text-gray-600">
												Turning concepts into functional, high-fidelity prototypes. Eager explorer of emerging tools & AI solutions.
											</p>
										</div>

										<div className="p-4 bg-gray-50 rounded-lg">
											<div className="flex flex-col items-center gap-2 mb-2 text-primary">
												<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.180a3.5 3.5 0 005.6 0V5.31a6.5 6.5 0 015.4 4.69zM10 6a2 2 0 10-4 0v1a2 2 0 104 0V6z" clipRule="evenodd"/>
												</svg>
												<span className="font-medium">Product Validation</span>
											</div>
											<p className="text-sm text-gray-600">
												Ensuring market fit through strategic user testing and iteration. Data-driven testing & in-field validation.
											</p>
										</div>

										<div className="p-4 bg-gray-50 rounded-lg">
											<div className="flex flex-col items-center gap-2 mb-2 text-primary">
												<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
												</svg>
												<span className="font-medium">Code-Driven Design</span>
											</div>
											<p className="text-sm text-gray-600">
												Leveraging React, front-end tools, and AI-driven workflows for efficiency. Bridging design and code with real-world testing.
											</p>
										</div>
									</div>

									{/* CTA Buttons */}
									<div className="mt-auto flex flex-col md:flex-row gap-4 pt-4 justify-between">
										<div className="flex flex-col md:flex-row gap-4">
											<button
												type="button"
												onClick={() => window.location.hash = ''}
												className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-full"
											>
												Cancel
											</button>
										<button
											type="button"
											onClick={openPortfolio}
											className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
										>
											View Portfolio
										</button>
										</div>
										<button
											type="button"
											onClick={() => goToSlide(1)}
											className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full"
										>
											Start Project
										</button>
									</div>
								</div>
							</div>

							{/* Slide 1: Previous Work */}
							<div className="flex flex-col h-full slide-work">
								{/* <div className="flex-grow"> */}
								<div>
									<Carousel
										showArrows={true}
										showStatus={false}
										showThumbs={false}
										infiniteLoop={true}
										autoPlay={true}
										interval={5000}
										stopOnHover={true}
										className="work-carousel"
									>
										{/* Länsförsäkringar */}
										<div className="work-item p-4">
											<div
												className="h-48 rounded-lg bg-cover bg-center bg-no-repeat"
												style={{
													backgroundImage:
														'url(/images/case/lansforsakringar/devices.png)',
												}}
											/>
											<div className="space-y-2">
												<div className="font-semibold text-lg text-gray-900">
													Länsförsäkringar
												</div>
												<div className="text-gray-600">
													{`Led the modernization of the
													company's digital presence,
													ensuring accessibility and
													brand consistency.`}
												</div>
												<a
													href="https://daniellauding.se/lansforsakringar"
													target="_blank"
													rel="noopener noreferrer"
													className="text-primary hover:text-primary-dark underline font-medium"
												>
													View Case Study
												</a>
											</div>
										</div>

										{/* Asteria AB */}
										<div className="work-item p-4">
											<div
												className="h-48 rounded-lg bg-cover bg-center bg-no-repeat"
												style={{
													backgroundImage:
														'url(/images/case/asteria/smartcashflow/laptop.png)',
												}}
											/>
											<div className="space-y-2">
												<div className="font-semibold text-lg text-gray-900">
													Asteria AB
												</div>
												<div className="text-gray-600">
													Developed innovative
													financial management
													solutions for SMEs.
												</div>
												<a
													href="https://daniellauding.se/asteria"
													target="_blank"
													rel="noopener noreferrer"
													className="text-primary hover:text-primary-dark underline font-medium"
												>
													View Case Study
												</a>
											</div>
										</div>

										{/* Swedbank */}
										<div className="work-item p-4">
											<div
												className="h-48 rounded-lg bg-cover bg-center bg-no-repeat"
												style={{
													backgroundImage:
														'url(/images/case/asteria/foretagskollen/laptop.png)',
												}}
											/>
											<div className="space-y-2">
												<div className="font-semibold text-lg text-gray-900">
													Swedbank Företagskollen
												</div>
												<div className="text-gray-600">
													Created intuitive financial
													management tools for
													business customers.
												</div>
												<a
													href="https://daniellauding.se/asteria/foretagskollen"
													target="_blank"
													rel="noopener noreferrer"
													className="text-primary hover:text-primary-dark underline font-medium"
												>
													View Case Study
												</a>
											</div>
										</div>

										{/* PayEx */}
										<div className="work-item p-4">
											<div
												className="h-48 rounded-lg bg-cover bg-center bg-no-repeat"
												style={{
													backgroundImage:
														'url(/images/case/asteria/payex/laptop.png)',
												}}
											/>
											<div className="space-y-2">
												<div className="font-semibold text-lg text-gray-900">
													PayEx Invoice Portal
												</div>
												<div className="text-gray-600">
													Streamlined invoice
													management and payment
													processing.
												</div>
												<a
													href="https://daniellauding.se/asteria/invoice-portal-payex"
													target="_blank"
													rel="noopener noreferrer"
													className="text-primary hover:text-primary-dark underline font-medium"
												>
													View Case Study
												</a>
											</div>
										</div>

										{/* Spotify */}
										<div className="work-item p-4">
											<div
												className="h-48 rounded-lg bg-cover bg-center bg-no-repeat"
												style={{
													backgroundImage:
														'url(/images/case/spotify/phones.png)',
												}}
											/>
											<div className="space-y-2">
												<div className="font-semibold text-lg text-gray-900">
													Spotify
												</div>
												<div className="text-gray-600">
													Enhanced music accessibility
													and user experience.
												</div>
												<a
													href="https://daniellauding.se/spotify"
													target="_blank"
													rel="noopener noreferrer"
													className="text-primary hover:text-primary-dark underline font-medium"
												>
													View Case Study
												</a>
											</div>
										</div>
									</Carousel>
								</div>

								{/* Add navigation buttons */}
								<div className="mt-auto flex flex-col md:flex-row justify-between gap-4">
									<div className="flex gap-4">
										<button
											type="button"
											onClick={() => window.location.hash = ''}
											className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-full"
										>
											Cancel
										</button>
									<button
										type="button"
										onClick={() => goToSlide(0)}
										className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
									>
										Previous
									</button>
									</div>
									<button
										type="button"
										onClick={() => goToSlide(2)}
										className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full"
									>
										Next
									</button>
								</div>
							</div>

							{/* Slide 2: Project Type */}
							<div className="flex flex-col h-full slide-project-type">
								{/* <div className="flex-grow"> */}
								<div>
									<div>
										<label
											htmlFor="projectName"
											className="block mb-2 font-medium text-left"
										>
											Project Name *
										</label>
										<input
											type="text"
											id="projectName"
											name="projectName"
											value={formState.projectName}
											onChange={handleChange}
											required
											className={`w-full p-2 border rounded focus:ring-2 focus:ring-primary ${
												formErrors.projectName
													? 'border-red-500'
													: ''
											}`}
											placeholder="Give your project a name"
										/>
										{formErrors.projectName && (
											<p className="text-red-500 text-sm mt-1">
												{formErrors.projectName}
											</p>
										)}
									</div>

									<div className="mt-4">
										<label
											htmlFor="project-description"
											className="block mb-2 font-medium text-left"
										>
											Project description *
										</label>
										<textarea
											id="project-description"
											name="project-description"
											className={`w-full p-2 border rounded focus:ring-2 focus:ring-primary ${
												formErrors['project-description'] ? 'border-red-500' : ''
											}`}
											rows="12"
											required
											value={formState['project-description']}
											onChange={handleChange}
										/>
										{formErrors['project-description'] && (
											<p className="text-red-500 text-sm mt-1">
												{formErrors['project-description']}
											</p>
										)}
									</div>

									<div>
										<label
											htmlFor="helpType"
											className="block mb-2 font-medium text-left"
										>
											What do you need help with? *
										</label>
										<div className={`space-y-4 ${formErrors.helpType ? 'border border-red-500 rounded p-2' : ''}`}>
											<div className="flex flex-wrap gap-2">
												{/* Predefined tags */}
												{[
													'Design',
													'Development',
													'Consultation',
													'UI/UX',
													'Prototyping',
													'Design System',
													'Front-end',
													'Research'
												].map((option) => (
													<button
														key={option}
														type="button"
														onClick={() => handleHelpTypeSelect(option)}
														className={`px-3 py-1 rounded-full text-sm ${
															formState.helpType?.includes(option)
																? 'bg-primary text-white'
																: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
														}`}
													>
														{option}
													</button>
												))}
												
												{/* Custom tags */}
												{formState.helpType?.split(',')
													.filter(tag => tag && !['Design', 'Development', 'Consultation', 'UI/UX', 'Prototyping', 'Design System', 'Front-end', 'Research'].includes(tag))
													.map(tag => (
														<div key={tag} className="bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
															{tag}
															<button
																type="button"
																onClick={() => handleRemoveTag('help', tag)}
																className="hover:text-gray-200"
															>
																<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
																</svg>
															</button>
														</div>
													))
												}
												
												{/* Add new tag input */}
												{editingHelpType ? (
													<div className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-2">
														<input
															id="newHelpTypeInput"
															type="text"
															value={newTagValue}
															onChange={(e) => setNewTagValue(e.target.value)}
															onKeyPress={(e) => {
																if (e.key === 'Enter' && newTagValue.trim()) {
																	handleNewTagSubmit('help', newTagValue);
																}
															}}
															className="bg-transparent border-none outline-none text-sm w-24"
															placeholder="New tag..."
															autoFocus
														/>
														{newTagValue.trim() && (
															<button
																type="button"
																onClick={() => handleNewTagSubmit('help', newTagValue)}
																className="text-primary hover:text-primary-dark"
															>
																<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
																</svg>
															</button>
														)}
													</div>
												) : (
													<button
														type="button"
														onClick={() => handleAddNewTag('help')}
														className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1"
													>
														<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
														</svg>
														<span>Add Custom</span>
													</button>
												)}
											</div>
										</div>
										{formErrors.helpType && (
											<p className="text-red-500 text-sm mt-1">
												{formErrors.helpType}
											</p>
										)}
									</div>

									{formState.helpType === 'Other' && (
										<div className="mt-4">
											<label
												htmlFor="helpTypeOther"
												className="block mb-2 font-medium text-left"
											>
												Please specify what you need
												help with:
											</label>
											<textarea
												id="helpTypeOther"
												name="helpTypeOther"
												value={formState.helpTypeOther}
												onChange={handleChange}
												className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
												rows="2"
											/>
										</div>
									)}

									<div>
										<label
											htmlFor="project-type"
											className="block mb-2 font-medium text-left"
										>
											What type of project is this? *
										</label>
										<div className={`space-y-4 ${formErrors['project-type'] ? 'border border-red-500 rounded p-2' : ''}`}>
											<div className="flex flex-wrap gap-2">
												{[
													'Full-time work',
													'Freelance',
													'Part-time',
													'Hourly',
													'Fixed price',
													'Retainer',
													'Trial project'
												].map((option) => (
													<button
														key={option}
														type="button"
														onClick={() => handleProjectTypeSelect(option)}
														className={`px-3 py-1 rounded-full text-sm ${
															formState['project-type']?.includes(option)
																? 'bg-primary text-white'
																: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
														}`}
													>
														{option}
													</button>
												))}
												
												{/* Custom tags */}
												{formState['project-type']?.split(',')
													.filter(tag => tag && !['Full-time work', 'Freelance', 'Part-time', 'Hourly', 'Fixed price', 'Retainer', 'Trial project'].includes(tag))
													.map(tag => (
														<div key={tag} className="bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
															{tag}
															<button
																type="button"
																onClick={() => handleRemoveTag('project', tag)}
																className="hover:text-gray-200"
															>
																<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
																</svg>
															</button>
														</div>
													))
												}
												
												{/* Add new tag input */}
												{editingProjectType ? (
													<div className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-2">
														<input
															id="newProjectTypeInput"
															type="text"
															value={newTagValue}
															onChange={(e) => setNewTagValue(e.target.value)}
															onKeyPress={(e) => {
																if (e.key === 'Enter' && newTagValue.trim()) {
																	handleNewTagSubmit('project', newTagValue);
																}
															}}
															className="bg-transparent border-none outline-none text-sm w-24"
															placeholder="New tag..."
															autoFocus
														/>
														{newTagValue.trim() && (
															<button
																type="button"
																onClick={() => handleNewTagSubmit('project', newTagValue)}
																className="text-primary hover:text-primary-dark"
															>
																<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
																</svg>
															</button>
														)}
													</div>
												) : (
													<button
														type="button"
														onClick={() => handleAddNewTag('project')}
														className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1"
													>
														<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
														</svg>
														<span>Add Custom</span>
													</button>
												)}
											</div>
										</div>
										{formErrors['project-type'] && (
											<p className="text-red-500 text-sm mt-1">
												{formErrors['project-type']}
											</p>
										)}
									</div>

									{formState['project-type'] === 'Other' && (
										<div>
											<label
												htmlFor="project-type-other"
												className="block mb-2 font-medium text-left"
											>
												Please specify project type:
											</label>
											<textarea
												id="project-type-other"
												name="project-type-other"
												value={
													formState[
														'project-type-other'
													]
												}
												onChange={handleChange}
												className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
												rows="2"
											/>
										</div>
									)}
								</div>

								<div className="mt-auto flex flex-col md:flex-row justify-between gap-4">
									<button
										type="button"
										onClick={() => goToSlide(1)}
										className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
									>
										Previous
									</button>
									<button
										type="button"
										onClick={() => goToSlide(3)}
										className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full"
									>
										Next
									</button>
								</div>
							</div>

							{/* Slide 3: Deliverables */}
							<div className="flex flex-col h-full slide-budget-deliverables">
								{/* <div className="flex-grow"> */}
								<div className="h-full">
									<div>
										<label
											htmlFor="deliverables-group"
											className="block mb-2 font-medium text-left"
										>
											What deliverables do you need? *
										</label>
										<div className={`space-y-4 ${formErrors.deliverables ? 'border border-red-500 rounded p-2' : ''}`}>
											<div className="flex flex-wrap gap-2">
											{[
												'Figma',
												'Design System',
												'UI',
												'UX',
												'Mentorship',
												'Front-end development',
												'Prototyping',
												'AI-driven exploration',
												'Real-code Prototypes',
												'Validate Solutions',
												'Design Concepts',
												'Design Evaluation',
													'CRO'
											].map((option) => (
													<button
													key={option}
														type="button"
														onClick={() => handleDeliverablesSelect(option)}
														className={`px-3 py-1 rounded-full text-sm ${
															formState.deliverables?.includes(option)
																? 'bg-primary text-white'
																: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
														}`}
													>
														{option}
													</button>
												))}
												
												{/* Custom deliverables tags */}
												{formState.deliverables?.split(',')
													.filter(tag => tag && !['Figma', 'Design System', 'UI', 'UX', 'Mentorship', 'Front-end development', 'Prototyping', 'AI-driven exploration', 'Real-code Prototypes', 'Validate Solutions', 'Design Concepts', 'Design Evaluation', 'CRO'].includes(tag))
													.map(tag => (
														<div key={tag} className="bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
															{tag}
															<button
																type="button"
																onClick={() => handleRemoveTag('deliverables', tag)}
																className="hover:text-gray-200"
															>
																<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
																</svg>
															</button>
										</div>
													))
												}
												
												{/* Add new deliverable input */}
												{editingDeliverables ? (
													<div className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-2">
												<input
															id="newDeliverableInput"
															type="text"
															value={newTagValue}
															onChange={(e) => setNewTagValue(e.target.value)}
															onKeyPress={(e) => {
																if (e.key === 'Enter' && newTagValue.trim()) {
																	handleNewTagSubmit('deliverables', newTagValue);
																}
															}}
															className="bg-transparent border-none outline-none text-sm w-24"
															placeholder="New deliverable..."
															autoFocus
														/>
														{newTagValue.trim() && (
															<button
																type="button"
																onClick={() => handleNewTagSubmit('deliverables', newTagValue)}
																className="text-primary hover:text-primary-dark"
															>
																<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
																</svg>
															</button>
														)}
												</div>
												) : (
													<button
														type="button"
														onClick={() => setEditingDeliverables(true)}
														className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1"
													>
														<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
														</svg>
														<span>Add Custom</span>
													</button>
											)}
										</div>
										</div>
										{formErrors.deliverables && (
											<p className="text-red-500 text-sm mt-1">
												{formErrors.deliverables}
											</p>
										)}
									</div>

									<div>
										<label
											htmlFor="budget"
											className="block mb-2 font-medium text-left"
										>
											What's your budget range? *
										</label>
										<select
											id="budget"
											name="budget"
											value={formState.budget || ''}
											onChange={(e) => {
												setFormState((prev) => ({
													...prev,
													budget: e.target.value,
												}));
											}}
											required
											className={`w-full p-2 border rounded focus:ring-2 focus:ring-primary ${
												formErrors.budget ? 'border-red-500' : ''
											}`}
										>
											<option value="">
												Select an option
											</option>
											<option value="$0 – $10k">
												$0 – $10k
											</option>
											<option value="$10k – $50k">
												$10k – $50k
											</option>
											<option value="$50k – $250k">
												$50k – $250k
											</option>
											<option value="$250k – $1M">
												$250k – $1M
											</option>
											<option value="$1M+">$1M+</option>
											<option value="Other">Other</option>
										</select>
										{formErrors.budget && (
											<p className="text-red-500 text-sm mt-1">
												{formErrors.budget}
											</p>
										)}

										{formState.budget === 'Other' && (
											<div>
												<div className="mt-3">
													<label
														htmlFor="budgetOther"
														className="block mb-2 font-medium text-left"
													>
														Please describe your
														budget range: *
													</label>
													<textarea
														id="budgetOther"
														name="budgetOther"
														placeholder="Please describe your budget range..."
														value={formState.budgetOther || ''}
														onChange={handleChange}
														className={`w-full p-2 border rounded focus:ring-2 focus:ring-primary ${
															formErrors.budgetOther ? 'border-red-500' : ''
														}`}
														rows="2"
														required
													/>
													{formErrors.budgetOther && (
														<p className="text-red-500 text-sm mt-1">
															{formErrors.budgetOther}
														</p>
													)}
												</div>

												<div className="mt-4">
													<label
														htmlFor="price-other"
														className="block mb-2 font-medium text-left"
													>
														Please specify exact
														amount: *
													</label>
													<input
														type="text"
														id="price-other"
														name="price-other"
														value={formState['price-other']}
														onChange={handleChange}
														className={`w-full p-2 border rounded focus:ring-2 focus:ring-primary ${
															formErrors['price-other'] ? 'border-red-500' : ''
														}`}
														placeholder="e.g. $5000"
														required
													/>
													{formErrors['price-other'] && (
														<p className="text-red-500 text-sm mt-1">
															{formErrors['price-other']}
														</p>
													)}
												</div>
											</div>
										)}
									</div>
								</div>

								<div className="mt-auto flex flex-col md:flex-row justify-between gap-4">
									<button
										type="button"
										onClick={() => goToSlide(2)}
										className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
									>
										Previous
									</button>
									<button
										type="button"
										onClick={() => goToSlide(4)}
										className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full"
									>
										Next
									</button>
								</div>
							</div>

							{/* Slide 4: Contact Details */}
							<div className="flex flex-col h-full slide-contact">
								<div className="flex-grow">
									<div>
										<label
											htmlFor="full-name"
											className="block mb-2 font-medium text-left"
										>
											Full name *
										</label>
										<input
											type="text"
											id="full-name"
											name="full-name"
											value={formState['full-name']}
											onChange={handleChange}
											required
											className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
											placeholder="Your full name"
										/>
									</div>

									<div>
										<label
											htmlFor="company-name"
											className="block mb-2 font-medium text-left"
										>
											Company name
										</label>
										<input
											type="text"
											id="company-name"
											name="company-name"
											value={formState['company-name']}
											onChange={handleChange}
											className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
											placeholder="Your company (if applicable)"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block mb-2 font-medium text-left"
										>
											Email *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formState.email}
											onChange={handleChange}
											required
											className={`w-full p-2 border rounded focus:ring-2 focus:ring-primary ${
												formErrors.email
													? 'border-red-500'
													: ''
											}`}
											placeholder="your@email.com"
										/>
										{formErrors.email && (
											<p className="text-red-500 text-sm mt-1">
												{formErrors.email}
											</p>
										)}
									</div>

									<div>
										<label
											htmlFor="file"
											className="block mb-2 font-medium text-left"
										>
											Upload files (optional)
										</label>
										<input
											type="file"
											id="file"
											name="file"
											multiple
											onChange={handleFileChange}
											className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
										/>
										<p className="text-sm text-gray-500 mt-1">
											Attach any relevant documents (PDF,
											images, etc.)
										</p>
										{formState.files.length > 0 && (
											<div className="mt-4 space-y-3">
												{formState.files.map(
													(file, index) => (
														<div
															key={index}
															className="flex items-center space-x-3"
														>
															{file.type.startsWith(
																'image/'
															) && (
																<img
																	src={URL.createObjectURL(
																		file
																	)}
																	alt={
																		file.name
																	}
																	className="h-16 w-16 object-cover rounded"
																/>
															)}
															<div className="flex-1 min-w-0">
																<p className="text-sm truncate">
																	{file.name}
																</p>
																<p className="text-xs text-gray-500">
																	{(
																		file.size /
																		1024
																	).toFixed(
																		1
																	)}{' '}
																	KB
																</p>
															</div>
															<button
																type="button"
																onClick={() => {
																	setFormState(
																		(
																			prev
																		) => ({
																			...prev,
																			files: prev.files.filter(
																				(
																					_,
																					i
																				) =>
																					i !==
																					index
																			),
																		})
																	);
																}}
																className="text-red-500 hover:text-red-700"
															>
																Remove
															</button>
														</div>
													)
												)}
											</div>
										)}
									</div>
								</div>

								<div className="mt-6 flex justify-end gap-4">
									<button
										type="button"
										onClick={() => goToSlide(3)}
										className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
									>
										Previous
									</button>
									<button
										type="submit"
										disabled={submitting}
										className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full"
									>
										{submitting
											? 'Submitting...'
											: 'Submit'}
									</button>
								</div>

								<div className="text-center mt-4">
									<a
										href="https://calendly.com/daniellauding"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:text-primary-dark underline"
									>
										Or book an appointment
									</a>
								</div>
							</div>
						</Carousel>
					</form>
				</div>
			)}
		</div>
	);
};

// Success message component
const SuccessMessage = ({ closeModal }) => {
	const handleClose = () => {
		closeModal();
		// Reload page and go to home
		window.location.href = '/';
	};

	return (
		<div className="flex flex-col items-center justify-center p-6">
			<h2 className="text-2xl font-bold mb-4">Thank You!</h2>
			<p className="text-gray-600 mb-6 text-center">
				Your project request has been submitted successfully. I&apos;ll
				get back to you soon!
			</p>
			<button
				onClick={handleClose}
				className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full"
			>
				Close
			</button>
		</div>
	);
};

export default ContactForm;
export { OffertForm, RequestForm, NewProjectForm };
