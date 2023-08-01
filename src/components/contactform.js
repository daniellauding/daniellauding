import React, { useState } from 'react';

const ContactForm = ({ closeRequestModal }) => {
	const [formState, setFormState] = useState({
		name: '',
		company: '',
		email: '',
		message: '',
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
					Thank you for contacting us!
					<button
						onClick={closeRequestModal}
						className="bg-primary hover:primary text-white font-bold py-5 px-8 mt-8 rounded-full cursor-pointer"
					>
						Dismiss
					</button>
				</p>
			) : (
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
								placeholder="I want to see more about the project ${item} please send me a code"
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
			)}
		</div>
	);
};

export default ContactForm;
