import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const EditClientModal = ({ client, onClose, onUpdate }) => {
	const [formData, setFormData] = useState({
		name: client.name || '',
		location: client.location || '',
		url: client.url || '',
	});
	const [saving, setSaving] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSaving(true);
		try {
			await updateDoc(doc(db, 'clients', client.id), formData);
			onUpdate({ ...client, ...formData });
			onClose();
		} catch (error) {
			console.error('Error updating client:', error);
			alert('Error updating client: ' + error.message);
		} finally {
			setSaving(false);
		}
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
			<div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full">
				<h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
					Edit Client
				</h3>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
							Name
						</label>
						<input
							type="text"
							value={formData.name}
							onChange={(e) =>
								setFormData({
									...formData,
									name: e.target.value,
								})
							}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
						/>
					</div>
					{/* Add other fields similarly */}
					<div className="flex justify-end space-x-4 mt-6">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
						>
							Cancel
						</button>
						<button
							type="submit"
							disabled={saving}
							className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark disabled:opacity-50"
						>
							{saving ? 'Saving...' : 'Save Changes'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditClientModal;
