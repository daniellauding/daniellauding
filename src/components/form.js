import React, { useState } from 'react';

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
				<p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
					Thank you for contacting me!
					<button
						onClick={closeContactModal}
						className="bg-primary hover:primary text-white font-bold py-5 px-8 mt-8 rounded-full cursor-pointer"
					>
						Dismiss
					</button>
				</p>
			) : (
				<div>
					<p className="pt-0 mb-0 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
						Contact me with anything
					</p>
					<form
						name="contact"
						method="post"
						data-netlify="true"
						onSubmit={handleSubmit}
					>
						<input type="hidden" name="contact" value="contact" />

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
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
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
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
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
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
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
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
								/>
							</label>
						</p>
						<p>
							<button
								type="submit"
								disabled={submitting || submitted}
								className="bg-primary hover:primary text-white font-bold py-5 px-8 mt-8 rounded-full cursor-pointer"
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
				<p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
					Thank you for asking me!
					<button
						onClick={closeOffertModal}
						className="bg-primary hover:primary text-white font-bold py-5 px-8 mt-8 rounded-full cursor-pointer"
					>
						Dismiss
					</button>
				</p>
			) : (
				<div>
					<p className="pt-0 mb-0 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
						Give me a project
					</p>
					<form
						name="offert"
						method="post"
						data-netlify="true"
						onSubmit={handleSubmit}
					>
						<input type="hidden" name="offert" value="offert" />

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
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
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
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
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
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
								/>
							</label>
						</p>
						<p>
							<label>
								Upload File:
								<input
									type="file"
									name="file"
									onChange={handleFileChange}
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
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
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
								/>
							</label>
						</p>
						<p>
							<button
								type="submit"
								disabled={submitting || submitted}
								className="bg-primary hover:primary text-white font-bold py-5 px-8 mt-8 rounded-full cursor-pointer"
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
				<p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
					Thank you for your request!
					<button
						onClick={closeRequestModal}
						className="bg-primary hover:primary text-white font-bold py-5 px-8 mt-8 rounded-full cursor-pointer"
					>
						Dismiss
					</button>
				</p>
			) : (
				<div>
					<p className="pt-0 mb-0 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
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
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
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
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
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
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
								/>
							</label>
						</p>
						<p>
							<label>
								Message:
								<textarea
									name="message"
									// placeholder={`I want to see more about the project ${
									// 	(item?.client
									// 		? `"${item.client}`
									// 		: '') +
									// 	(item?.title ? ` – ${item.title}` : '')
									// }" please send me a code`}
									value={formState.message}
									required
									onChange={handleChange}
									className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
								/>
							</label>
						</p>
						<p>
							<button
								type="submit"
								disabled={submitting || submitted}
								className="bg-primary hover:primary text-white font-bold py-5 px-8 mt-8 rounded-full cursor-pointer"
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

export default ContactForm;
export { OffertForm };
export { RequestForm };
