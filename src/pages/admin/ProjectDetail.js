import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import ChipSelector from '../../components/ChipSelector';
import { commonTags } from '../../constants/tags';

// Add this helper component for showing style chips
const StyleChip = ({ label }) => (
	<span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full mr-2 mb-2 inline-block">
		{label}
	</span>
);

// Add this helper component for text style chips
const TextStyleChips = ({ text }) => (
	<div className="flex flex-wrap gap-2 mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
		{text.size && <StyleChip label={`size: ${text.size}`} />}
		{text.align?.horizontal && (
			<StyleChip label={`align: ${text.align.horizontal}`} />
		)}
		{text.className && <StyleChip label={`class: ${text.className}`} />}
		{text.color && <StyleChip label={`color: ${text.color}`} />}
		{text.weight && <StyleChip label={`weight: ${text.weight}`} />}
		{text.lineHeight && (
			<StyleChip label={`line-height: ${text.lineHeight}`} />
		)}
		{text.letterSpacing && (
			<StyleChip label={`letter-spacing: ${text.letterSpacing}`} />
		)}
	</div>
);

const ProjectDetail = () => {
	const { clientId, projectId } = useParams();
	const navigate = useNavigate();
	const [project, setProject] = useState(null);
	const [loading, setLoading] = useState(true);
	const [deleting, setDeleting] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editedProject, setEditedProject] = useState(null);

	useEffect(() => {
		const fetchProject = async () => {
			try {
				const projectRef = doc(db, 'projects', projectId);
				const projectSnap = await getDoc(projectRef);

				if (projectSnap.exists()) {
					const projectData = {
						id: projectSnap.id,
						...projectSnap.data(),
					};
					console.log('Found project data:', projectData);
					setProject(projectData);
					setEditedProject(projectData);
				}
			} catch (error) {
				console.error('Error fetching project:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchProject();
	}, [projectId]);

	const handleDeleteProject = async () => {
		if (!window.confirm('Are you sure you want to delete this project?')) {
			return;
		}

		setDeleting(true);
		try {
			await deleteDoc(doc(db, 'projects', projectId));
			console.log('Project deleted successfully');
			navigate(`/admin/clients/${clientId}`);
		} catch (error) {
			console.error('Error deleting project:', error);
			alert('Error deleting project: ' + error.message);
		} finally {
			setDeleting(false);
		}
	};

	const handleSave = async () => {
		try {
			await updateDoc(doc(db, 'projects', project.id), editedProject);
			setProject(editedProject);
			setIsEditing(false);
		} catch (error) {
			console.error('Error updating project:', error);
			alert('Error updating project: ' + error.message);
		}
	};

	if (loading) return <div>Loading project...</div>;
	if (!project || !editedProject) return <div>Project not found</div>;

	return (
		<div className="space-y-6 p-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
					{isEditing ? (
						<input
							type="text"
							value={editedProject.title}
							onChange={(e) =>
								setEditedProject({
									...editedProject,
									title: e.target.value,
								})
							}
							className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-primary px-1"
						/>
					) : (
						project.title
					)}
				</h2>
				<div className="space-x-4">
					<button
						onClick={() => navigate(`/admin/clients/${clientId}`)}
						className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
					>
						← Back to Client
					</button>
					{isEditing ? (
						<>
							<button
								onClick={handleSave}
								className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
							>
								Save Changes
							</button>
							<button
								onClick={() => {
									setIsEditing(false);
									setEditedProject(project);
								}}
								className="px-4 py-2 text-gray-600 dark:text-gray-400"
							>
								Cancel
							</button>
						</>
					) : (
						<>
							<button
								onClick={() => setIsEditing(true)}
								className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
							>
								Edit Project
							</button>
							<button
								onClick={handleDeleteProject}
								disabled={deleting}
								className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
							>
								{deleting ? 'Deleting...' : 'Delete Project'}
							</button>
						</>
					)}
				</div>
			</div>

			<div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-8">
				{/* Basic Info */}
				<section>
					<h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
						Basic Information
					</h3>
					<dl className="grid grid-cols-2 gap-4">
						<div>
							<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Case
							</dt>
							<dd className="mt-1 text-gray-900 dark:text-white">
								{project.case}
							</dd>
						</div>
						<div>
							<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Client
							</dt>
							<dd className="mt-1 text-gray-900 dark:text-white">
								{project.clientName}
							</dd>
						</div>
						<div>
							<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Tags
							</dt>
							<dd className="mt-1 flex gap-2">
								{isEditing ? (
									<ChipSelector
										selectedTags={editedProject.tags}
										onChange={(tags) =>
											setEditedProject({
												...editedProject,
												tags,
											})
										}
										suggestions={commonTags}
									/>
								) : (
									project.tags?.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm"
										>
											{tag}
										</span>
									))
								)}
							</dd>
						</div>
						<div>
							<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Technologies
							</dt>
							<dd className="mt-1 flex gap-2">
								{project.technologies?.map((tech) => (
									<span
										key={tech}
										className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm"
									>
										{tech}
									</span>
								))}
							</dd>
						</div>
					</dl>
				</section>

				{/* Content Sections */}
				<section>
					<h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
						Content Sections
					</h3>
					<div className="space-y-6">
						{project.content?.map((section) => (
							<div
								key={section.id}
								className="border dark:border-gray-700 rounded-lg p-4"
							>
								<div className="mb-4">
									<h4 className="font-medium mb-2 text-lg text-gray-900 dark:text-white">
										{section.section}
									</h4>

									{/* Style Information */}
									<div className="flex flex-wrap mb-3">
										{section.class && (
											<StyleChip
												label={`class: ${section.class}`}
											/>
										)}
										{section.padding && (
											<StyleChip
												label={`padding: ${section.padding}`}
											/>
										)}
										{section.container && (
											<StyleChip
												label={`container: ${section.container}`}
											/>
										)}
									</div>
								</div>

								{/* Text Content */}
								{section.text && (
									<div className="mb-4">
										{Array.isArray(section.text) ? (
											section.text.map((text, idx) => (
												<div key={idx}>
													<TextStyleChips
														text={text}
													/>
													<p
														className={`${
															text.size
																? `text-${text.size}`
																: ''
														} ${
															text.className || ''
														}`}
													>
														{text.value}
													</p>
												</div>
											))
										) : (
											<>
												<TextStyleChips
													text={section.text}
												/>
												<p
													className={`${
														section.text.size
															? `text-${section.text.size}`
															: ''
													} ${
														section.text.align
															?.horizontal
															? `text-${section.text.align.horizontal}`
															: ''
													}`}
												>
													{section.text.value}
												</p>
											</>
										)}
									</div>
								)}

								{/* Groups */}
								{section.groups?.items && (
									<div>
										<div className="mb-2 flex flex-wrap">
											<StyleChip
												label={`grid-gap: ${section.groups.class}`}
											/>
										</div>
										<div className="grid gap-4">
											{section.groups.items.map(
												(item, idx) => (
													<div key={idx}>
														<div className="mb-2 flex flex-wrap">
															{item.columns && (
																<StyleChip
																	label={`cols: ${item.columns}`}
																/>
															)}
															{item.class && (
																<StyleChip
																	label={`class: ${item.class}`}
																/>
															)}
														</div>
														{item.text &&
														Array.isArray(item.text)
															? item.text.map(
																(
																	text,
																	textIdx
																) => (
																	<p
																		key={
																			textIdx
																		}
																		className={
																			text.className
																		}
																	>
																		{
																			text.value
																		}
																	</p>
																)
															  )
															: item.text && (
																<p
																	className={
																		item
																			.text
																			.className
																	}
																>
																	{
																		item
																			.text
																			.value
																	}
																</p>
															  )}
													</div>
												)
											)}
										</div>
									</div>
								)}

								{/* Images */}
								{section.image && (
									<div>
										<div className="mb-2 flex flex-wrap">
											{section.image.imgClass && (
												<StyleChip
													label={`img-class: ${section.image.imgClass}`}
												/>
											)}
											{section.image.style && (
												<StyleChip
													label={`style: ${section.image.style}`}
												/>
											)}
											{section.image.variant && (
												<StyleChip
													label={`variant: ${section.image.variant}`}
												/>
											)}
										</div>
										{section.image.variant === 'loop' ? (
											<div
												className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${
													section.image.imgClass || ''
												}`}
											>
												{section.image.paths?.map(
													(path, idx) => (
														<div
															key={idx}
															className="relative aspect-w-16 aspect-h-9"
														>
															<img
																src={path}
																alt={`Loop image ${
																	idx + 1
																}`}
																className="w-full h-full object-cover rounded"
															/>
															<div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
																{idx + 1} /{' '}
																{
																	section
																		.image
																		.count
																}
															</div>
														</div>
													)
												)}
											</div>
										) : (
											<div
												className={
													section.image.imgClass
												}
											>
												<img
													src={section.image.src}
													alt={`Section ${section.id}`}
													className="w-full rounded"
												/>
											</div>
										)}
									</div>
								)}

								{/* Background */}
								{section.background && (
									<div className="mt-4">
										<div className="flex flex-wrap">
											{section.background.color && (
												<StyleChip
													label={`bg-color: ${section.background.color}`}
												/>
											)}
											{section.background.image && (
												<StyleChip label="has-bg-image" />
											)}
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</section>

				{/* Background Images */}
				{project.content?.filter((section) => section.background?.image)
					.length > 0 && (
					<section>
						<h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
							Background Images
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{project.content
								.filter((section) => section.background?.image)
								.map((section, idx) => (
									<div
										key={idx}
										className="border dark:border-gray-700 rounded p-2"
									>
										<img
											src={section.background.image}
											alt={`Background ${idx + 1}`}
											className="w-full rounded"
										/>
										<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
											Section: {section.section}
										</p>
									</div>
								))}
						</div>
					</section>
				)}
			</div>
		</div>
	);
};

export default ProjectDetail;
