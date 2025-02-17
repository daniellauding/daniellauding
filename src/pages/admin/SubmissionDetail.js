import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const SubmissionDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [request, setRequest] = useState(null);
	const [loading, setLoading] = useState(true);
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		const fetchRequest = async () => {
			try {
				const docRef = doc(db, 'projectRequests', id);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					setRequest({
						id: docSnap.id,
						...docSnap.data(),
					});
				}
			} catch (error) {
				console.error('Error fetching request:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchRequest();
	}, [id]);

	const handleDelete = async () => {
		if (
			!window.confirm(
				'Are you sure you want to delete this project request?'
			)
		) {
			return;
		}

		setDeleting(true);
		try {
			await deleteDoc(doc(db, 'projectRequests', id));
			console.log('Project request deleted successfully');
			navigate('/admin/submissions');
		} catch (error) {
			console.error('Error deleting request:', error);
			setDeleting(false);
		}
	};

	if (loading) return <div>Loading...</div>;
	if (!request) return <div>Request not found</div>;

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
					Project Request Details
				</h2>
				<div className="space-x-4">
					<button
						onClick={() => navigate('/admin/submissions')}
						className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
					>
						← Back to Submissions
					</button>
					<button
						onClick={handleDelete}
						disabled={deleting}
						className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
					>
						{deleting ? 'Deleting...' : 'Delete Request'}
					</button>
				</div>
			</div>

			<div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-6">
				{/* Contact Information */}
				<section>
					<h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
						Contact Information
					</h3>
					<dl className="grid grid-cols-2 gap-4">
						<div>
							<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Name
							</dt>
							<dd className="mt-1 text-gray-900 dark:text-white">
								{request.contact?.fullName || 'Not provided'}
							</dd>
						</div>
						<div>
							<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Email
							</dt>
							<dd className="mt-1 text-gray-900 dark:text-white">
								{request.contact?.email || 'Not provided'}
							</dd>
						</div>
						{request.contact?.company && (
							<div>
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Company
								</dt>
								<dd className="mt-1 text-gray-900 dark:text-white">
									{request.contact.company}
								</dd>
							</div>
						)}
					</dl>
				</section>

				{/* Project Details */}
				<section>
					<h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
						Project Details
					</h3>
					<dl className="grid grid-cols-2 gap-4">
						<div>
							<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Project Name
							</dt>
							<dd className="mt-1 text-gray-900 dark:text-white">
								{request.projectName}
							</dd>
						</div>
						<div>
							<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Budget
							</dt>
							<dd className="mt-1 text-gray-900 dark:text-white">
								{typeof request.budget === 'object'
									? request.budget.range ||
									  request.budget.description
									: request.budget}
								{request.budgetOther &&
									` (${request.budgetOther})`}
							</dd>
						</div>
					</dl>
				</section>

				{/* Project Description */}
				<section>
					<h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
						Project Description
					</h3>
					<div className="bg-gray-50 dark:bg-gray-700 rounded p-4">
						<pre className="whitespace-pre-wrap text-gray-900 dark:text-white font-sans">
							{request.projectDescription}
						</pre>
					</div>
				</section>

				{/* Attachments */}
				{request.fileUrls && request.fileUrls.length > 0 && (
					<section>
						<h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
							Attachments
						</h3>
						<div className="space-y-2">
							{request.fileUrls.map((url, index) => (
								<a
									key={index}
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="block text-primary dark:text-primary-light hover:underline"
								>
									Attachment {index + 1}
								</a>
							))}
						</div>
					</section>
				)}
			</div>
		</div>
	);
};

export default SubmissionDetail;
