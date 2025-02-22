import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const SubmissionsList = () => {
	const navigate = useNavigate();
	const [submissions, setSubmissions] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchSubmissions = async () => {
			try {
				const q = query(
					collection(db, 'projectRequests'),
					orderBy('createdAt', 'desc')
				);
				const querySnapshot = await getDocs(q);
				const submissionsData = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
					// Handle form data structure
					name:
						doc.data()['full-name'] || doc.data().contact?.fullName,
					company:
						doc.data()['company-name'] ||
						doc.data().contact?.company,
					email: doc.data().email || doc.data().contact?.email,
					projectName:
						doc.data().projectName || doc.data()['project-name'],
					description:
						doc.data()['project-description'] ||
						doc.data().projectDescription,
				}));
				setSubmissions(submissionsData);
			} catch (error) {
				console.error('Error fetching submissions:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchSubmissions();
	}, []);

	return (
		<div className="space-y-6">
			<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
				Project Submissions
			</h2>

			{loading ? (
				<div className="text-gray-600 dark:text-gray-400">
					Loading submissions...
				</div>
			) : submissions.length > 0 ? (
				<div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
					<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
						<thead className="bg-gray-50 dark:bg-gray-800">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Contact
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Project Details
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Help Types
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Project Type
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Payment
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Date & Time
								</th>
								<th className="relative px-6 py-3">
									<span className="sr-only">View</span>
								</th>
							</tr>
						</thead>
						<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
							{submissions.map((submission) => (
								<tr
									key={submission.id}
									className="hover:bg-gray-50 dark:hover:bg-gray-700"
								>
									<td className="px-6 py-4">
										<div className="text-sm font-medium text-gray-900">
											{submission.name}
										</div>
										<div className="text-sm text-gray-500">
											{submission.email}
										</div>
										<div className="text-sm text-gray-500">
											{submission.company}
										</div>
									</td>
									<td className="px-6 py-4">
										<div className="text-sm font-medium text-gray-900">
											{submission.projectName}
										</div>
										<div className="text-sm text-gray-500 line-clamp-2">
											{submission.description}
										</div>
									</td>
									<td className="px-6 py-4">
										<div className="text-sm text-gray-900">
											{submission.helpTypes?.join(', ')}
										</div>
										{submission.helpTypeOther && (
											<div className="text-sm text-gray-500">
												Other:{' '}
												{submission.helpTypeOther}
											</div>
										)}
									</td>
									<td className="px-6 py-4">
										<div className="text-sm text-gray-900">
											{submission.projectTypes?.join(
												', '
											)}
										</div>
										{submission.projectTypeOther && (
											<div className="text-sm text-gray-500">
												Other:{' '}
												{submission.projectTypeOther}
											</div>
										)}
									</td>
									<td className="px-6 py-4">
										<div className="text-sm text-gray-900">
											{submission.budget?.range ||
												submission.budget}
										</div>
										<div
											className={`text-sm ${
												submission['payment-method'] ===
													'credit-card' ||
												submission.paymentMethod ===
													'stripe'
													? 'text-green-600'
													: 'text-gray-500'
											}`}
										>
											{(submission['payment-method'] ===
											'credit-card'
												? 'Stripe'
												: submission.paymentMethod) ||
												submission['payment-method'] ||
												'Invoice'}
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{submission.createdAt
											?.toDate()
											.toLocaleString()}
									</td>
									<td className="px-6 py-4 text-right text-sm font-medium">
										<button
											onClick={() =>
												navigate(
													`/admin/submissions/${submission.id}`
												)
											}
											className="text-primary hover:text-primary-dark"
										>
											View details
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div className="text-gray-600 dark:text-gray-400">
					No submissions found
				</div>
			)}
		</div>
	);
};

export default SubmissionsList;
