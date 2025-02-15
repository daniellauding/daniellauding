import React from 'react';

const ProjectModal = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {project.projectName}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-6 space-y-6">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                            <div className="mt-2 text-sm text-gray-500">
                                <p>Name: {project.contact.fullName}</p>
                                <p>Email: {project.contact.email}</p>
                                <p>Company: {project.contact.company}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Project Details</h3>
                            <div className="mt-2 text-sm text-gray-500">
                                <p className="whitespace-pre-wrap">{project.projectDescription}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Help Types</h3>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {project.helpTypes.map((type, index) => (
                                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-white">
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Budget</h3>
                            <div className="mt-2 text-sm text-gray-500">
                                <p>Range: {project.budget.range}</p>
                                {project.budget.description && (
                                    <p>Description: {project.budget.description}</p>
                                )}
                                {project.budget.exactAmount && (
                                    <p>Exact Amount: {project.budget.exactAmount}</p>
                                )}
                            </div>
                        </div>

                        {project.fileUrls && project.fileUrls.length > 0 && (
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Attachments</h3>
                                <div className="mt-2 grid grid-cols-2 gap-4">
                                    {project.fileUrls.map((url, index) => (
                                        <a
                                            key={index}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary-dark"
                                        >
                                            View Attachment {index + 1}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal; 