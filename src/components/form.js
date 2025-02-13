import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ContactForm = ({ closeContactModal }) => {
	const [formState, setFormState] = useState({
		name: '',
		company: '',
		email: '',
		message: `Please i need to talk to you`,
	});

	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
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
			{submitted ? (
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
								<label>
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
								<label>
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
								<label>
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
								<label>
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
								<label>
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
								<label>
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
								<label>
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
									<label>
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
								<label>
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

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
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
								<label>
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
								<label>
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
								<label>
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
								<label>
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
	const [formState, setFormState] = useState({
		name: '',
		company: '',
		email: '',
		projectName: '',
		helpType: '',
		helpTypeOther: '',
		projectType: '',
		projectTypeOther: '',
		deliverables: [],
		deliverablesOther: '',
		budget: '',
		budgetOther: '',
		'project-description': '',
		files: [],
	});

	const [currentSlide, setCurrentSlide] = useState(0);
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	// Add this to debug slide changes
	useEffect(() => {
		console.log('Current slide:', currentSlide);
	}, [currentSlide]);

	// Create a navigation helper
	const goToSlide = (slideNumber) => {
		console.log('Going to slide:', slideNumber);
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		const formData = new FormData();
		formData.append('form-name', 'newproject');

		// Basic fields
		formData.append('name', e.target['full-name'].value);
		formData.append('company', e.target['company-name'].value);
		formData.append('email', e.target.email.value);
		formData.append('projectName', formState.projectName);

		// Help type fields
		formData.append('helpType', formState.helpType);
		formData.append('helpTypeOther', formState.helpTypeOther);

		// Project type fields
		formData.append('projectType', formState.projectType);
		formData.append('projectTypeOther', formState.projectTypeOther);

		// Deliverables
		formData.append('deliverables', formState.deliverables.join(', '));
		formData.append('deliverablesOther', formState.deliverablesOther);

		// Budget fields
		formData.append('budget', formState.budget);
		formData.append('budgetOther', formState.budgetOther);

		// Project description
		formData.append(
			'projectDescription',
			e.target['project-description'].value
		);

		// Handle files
		if (formState.files.length > 0) {
			formState.files.forEach((file) => {
				formData.append('file', file);
			});
		}

		// Debug log
		console.log('Form Data being sent:');
		for (let pair of formData.entries()) {
			console.log(pair[0] + ': ' + pair[1]);
		}

		// Also log the raw form state for debugging
		console.log('Form State:', formState);

		try {
			const response = await fetch('/', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
				},
				body: formData,
			});

			if (response.ok) {
				setSubmitted(true);
				setSubmitting(false);
				closeModal();
			} else {
				throw new Error('Form submission failed');
			}
		} catch (error) {
			console.error('Error:', error);
			setSubmitting(false);
			alert(
				'There was a problem submitting your form. Please try again.'
			);
		}
	};

	return (
		<div className="text-gray-800 h-full">
			{submitted ? (
				<div className="flex gap-2 flex-col">
					<p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
						Thank you for your submission!
					</p>
					<button
						onClick={closeModal}
						className="bg-primary w-fit hover:primary text-white font-bold py-2 px-4 mt-8 rounded-full cursor-pointer"
					>
						Dismiss
					</button>
				</div>
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
							className="custom-carousel h-full overflow-y-scroll pb-16"
						>
							{/* Slide 0: Introduction */}
							<div className="p-0 flex flex-col h-full">
								{/* Add the new badge */}
								<div className="mb-6">
									<div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20 shadow-sm">
										<span>
											{`Got an idea? Let's bring it to life
											in just 1 week!`}
											<span className="ml-1">🚀</span>
										</span>
									</div>
								</div>

								{/* <div className="flex-grow"> */}
								<div>
									<p className="mb-4 text-gray-600 leading-relaxed text-left">
										I specialize in UI/UX, rapid
										prototyping, product validation, and
										design systems, shaping digital
										experiences that are both user-centric
										and business-driven. With over 12 years
										in the tech industry, I bridge the gap
										between design and development,
										delivering test-ready, data-backed
										solutions for web and mobile.
									</p>
									<h3 className="text-md font-semibold mb-2 text-left">
										What I Do Best
									</h3>
									<ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600 text-left text-sm">
										<li>
											<strong>Hands-On Approach</strong>:
											Turning concepts into functional,
											high-fidelity prototypes
										</li>
										<li>
											<strong>
												Design Systems & UI/UX
											</strong>
											: Building scalable, intuitive, and
											visually compelling experiences
										</li>
										<li>
											<strong>Product Validation</strong>:
											Ensuring market fit through
											strategic user testing and iteration
										</li>
										<li>
											<strong>Code-Driven Design</strong>:
											Leveraging React, front-end tools,
											and AI-driven workflows for
											efficiency
										</li>
									</ul>
									<p className="mt-2 mb-6 text-gray-600 text-sm text-left">
										{`With a hands-on approach, I seamlessly
										integrate design and coding, crafting
										polished prototypes that don't just look
										good but work flawlessly. Whether
										leading a project or refining details, I
										combine creativity and technical
										expertise to bring ambitious ideas to
										life.`}
									</p>
									<div className="flex gap-4">
										<button
											type="button"
											onClick={openPortfolio}
											className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
										>
											View Portfolio
										</button>
										<button
											type="button"
											onClick={() => goToSlide(1)}
											className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full"
										>
											Get Started
										</button>
									</div>
								</div>
							</div>

							{/* Slide 1: Previous Work */}
							<div className="flex flex-col h-full">
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
											<div className="bg-gray-100 h-48 mb-4 rounded-lg">
												{/* Add image here */}
											</div>
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
											<div className="bg-gray-100 h-48 mb-4 rounded-lg">
												{/* Add image here */}
											</div>
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
											<div className="bg-gray-100 h-48 mb-4 rounded-lg">
												{/* Add image here */}
											</div>
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
											<div className="bg-gray-100 h-48 mb-4 rounded-lg">
												{/* Add image here */}
											</div>
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
											<div className="bg-gray-100 h-48 mb-4 rounded-lg">
												{/* Add image here */}
											</div>
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
								<div className="mt-6 flex justify-end gap-4">
									<button
										type="button"
										onClick={() => goToSlide(0)}
										className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
									>
										Previous
									</button>
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
							<div className="p-6 flex flex-col h-full">
								{/* <div className="flex-grow"> */}
								<div>
									<div>
										<label
											htmlFor="projectName"
											className="block mb-2 font-medium"
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
											className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
											placeholder="Give your project a name"
										/>
									</div>

									<div className="mt-4">
										<label
											htmlFor="project-description"
											className="block mb-2 font-medium"
										>
											Project description
										</label>
										<textarea
											id="project-description"
											name="project-description"
											className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
											rows="4"
											placeholder="Describe your project and what you need"
											value={
												formState['project-description']
											}
											onChange={handleChange}
										/>
									</div>

									<div>
										<label
											htmlFor="help-type"
											className="block mb-2 font-medium"
										>
											What do you need help with? *
										</label>
										<select
											id="help-type"
											name="help-type"
											value={formState['help-type']}
											onChange={handleChange}
											required
											className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
										>
											<option value="">
												Select an option
											</option>
											<option value="Launching a new product">
												Launching a new product
											</option>
											<option value="Building an internal tool">
												Building an internal tool
											</option>
											<option value="Other">Other</option>
										</select>
									</div>

									{formState['help-type'] === 'Other' && (
										<div>
											<label
												htmlFor="other-help"
												className="block mb-2 font-medium"
											>
												Please describe what you need
												help with:
											</label>
											<textarea
												id="other-help"
												name="other-help"
												className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
												rows="3"
											/>
										</div>
									)}

									<div>
										<label
											htmlFor="project-type"
											className="block mb-2 font-medium"
										>
											What type of project is this? *
										</label>
										<select
											id="project-type"
											name="project-type"
											value={formState['project-type']}
											onChange={handleChange}
											required
											className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
										>
											<option value="">
												Select an option
											</option>
											<option value="Full-time work">
												Full-time work
											</option>
											<option value="Freelance">
												Freelance
											</option>
											<option value="Part-time">
												Part-time
											</option>
											<option value="Hourly">
												Hourly
											</option>
											<option value="Flexible">
												Flexible
											</option>
											<option value="Other">Other</option>
										</select>
									</div>

									{formState['project-type'] === 'Other' && (
										<div>
											<label
												htmlFor="project-type-other"
												className="block mb-2 font-medium"
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

								<div className="mt-6 flex justify-end gap-4">
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
							<div className="flex flex-col h-full">
								{/* <div className="flex-grow"> */}
								<div>
									<div>
										<label
											htmlFor="deliverables-group"
											className="block mb-2 font-medium"
										>
											What deliverables do you need? *
										</label>
										<div
											id="deliverables-group"
											className="grid grid-cols-2 gap-3 mb-4"
										>
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
												'CRO',
											].map((option) => (
												<label
													key={option}
													className="flex items-center space-x-2"
												>
													<input
														type="checkbox"
														name="deliverables"
														value={option}
														checked={formState.deliverables.includes(
															option
														)}
														onChange={(e) => {
															const value =
																e.target.value;
															setFormState(
																(prev) => ({
																	...prev,
																	deliverables:
																		e.target
																			.checked
																			? [
																					...prev.deliverables,
																					value,
																			  ]
																			: prev.deliverables.filter(
																					(
																						d
																					) =>
																						d !==
																						value
																			  ),
																})
															);
														}}
														className="form-checkbox h-4 w-4 text-primary"
													/>
													<span className="text-sm text-gray-700">
														{option}
													</span>
												</label>
											))}
										</div>
										<div className="space-y-4">
											<label className="flex items-center space-x-3">
												<input
													type="checkbox"
													value="other"
													checked={formState.deliverables.includes(
														'other'
													)}
													onChange={(e) => {
														const value =
															e.target.value;
														setFormState(
															(prev) => ({
																...prev,
																deliverables: e
																	.target
																	.checked
																	? [
																			...prev.deliverables,
																			value,
																	  ]
																	: prev.deliverables.filter(
																			(
																				d
																			) =>
																				d !==
																				value
																	  ),
															})
														);
													}}
													className="form-checkbox h-4 w-4 text-primary"
												/>
												<span>Other</span>
											</label>

											{formState.deliverables.includes(
												'other'
											) && (
												<div className="ml-7">
													<textarea
														placeholder="Please specify your deliverables..."
														value={
															formState.deliverablesOther ||
															''
														}
														onChange={(e) =>
															setFormState(
																(prev) => ({
																	...prev,
																	deliverablesOther:
																		e.target
																			.value,
																})
															)
														}
														className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
														rows="3"
													/>
												</div>
											)}
										</div>
									</div>

									<div>
										<label
											htmlFor="budget"
											className="block mb-2 font-medium"
										>
											What is your budget? *
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
											className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
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

										{formState.budget === 'Other' && (
											<div className="mt-3">
												<textarea
													placeholder="Please specify your budget..."
													value={
														formState.budgetOther ||
														''
													}
													onChange={(e) =>
														setFormState(
															(prev) => ({
																...prev,
																budgetOther:
																	e.target
																		.value,
															})
														)
													}
													className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
													rows="2"
												/>
											</div>
										)}
									</div>

									{formState.budget === 'Other' && (
										<div>
											<label
												htmlFor="price-other"
												className="block mb-2 font-medium"
											>
												Please specify your budget:
											</label>
											<input
												type="text"
												id="price-other"
												name="price-other"
												className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
											/>
										</div>
									)}
								</div>

								<div className="mt-6 flex justify-end gap-4">
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
							<div className="flex flex-col h-full">
								<div className="flex-grow">
									<div>
										<label
											htmlFor="full-name"
											className="block mb-2 font-medium"
										>
											Full name *
										</label>
										<input
											type="text"
											id="full-name"
											name="full-name"
											required
											className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
											placeholder="Your full name"
										/>
									</div>

									<div>
										<label
											htmlFor="company-name"
											className="block mb-2 font-medium"
										>
											Company name
										</label>
										<input
											type="text"
											id="company-name"
											name="company-name"
											className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
											placeholder="Your company (if applicable)"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block mb-2 font-medium"
										>
											Email *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
											placeholder="your@email.com"
										/>
									</div>

									<div>
										<label
											htmlFor="file"
											className="block mb-2 font-medium"
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

export default ContactForm;
export { OffertForm, RequestForm, NewProjectForm };
