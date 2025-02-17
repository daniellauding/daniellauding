import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const EditProjectModal = ({ project, onClose, onUpdate }) => {
	const [formData, setFormData] = useState({
		title: project.title || '',
		case: project.case || '',
		description: project.description || '',
		tags: project.tags || [],
		technologies: project.technologies || [],
	});
	const [saving, setSaving] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSaving(true);
		try {
			await updateDoc(doc(db, 'projects', project.id), formData);
			onUpdate({ ...project, ...formData });
			onClose();
		} catch (error) {
			console.error('Error updating project:', error);
			alert('Error updating project: ' + error.message);
		} finally {
			setSaving(false);
		}
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
			<div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full">
				<h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
					Edit Project
				</h3>
				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Form fields */}
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

export default EditProjectModal;
