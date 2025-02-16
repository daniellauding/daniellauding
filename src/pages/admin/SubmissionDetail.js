import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const SubmissionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        const docRef = doc(db, "projectRequests", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          
          // Helper function to handle both string and array types
          const processField = (field) => {
            if (!field) return [];
            if (Array.isArray(field)) return field;
            return field.split(',').map(item => item.trim());
          };

          setSubmission({
            id: docSnap.id,
            ...data,
            // Handle form data structure
            name: data['full-name'] || data.contact?.fullName || data.name,
            company: data['company-name'] || data.contact?.company || data.company,
            email: data.email || data.contact?.email,
            projectName: data.projectName || data['project-name'] || 'Untitled Project',
            description: data['project-description'] || data.projectDescription || data.description,
            // Handle arrays and strings
            helpTypes: processField(data.helpType || data['help-type']),
            projectTypes: processField(data['project-type'] || data.projectTypes),
            deliverables: processField(data.deliverables)
          });
        }
      } catch (error) {
        console.error("Error fetching submission:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmission();
  }, [id]);

  if (loading) {
    return <div className="text-gray-600 dark:text-gray-400">Loading submission...</div>;
  }

  if (!submission) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Submission not found</h3>
        <button
          onClick={() => navigate('/admin/submissions')}
          className="mt-4 text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-lighter"
        >
          ← Back to submissions
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {submission.projectName}
        </h2>
        <button
          onClick={() => navigate('/admin/submissions')}
          className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-lighter"
        >
          ← Back to submissions
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Contact Information</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">{submission.name}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Company</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">{submission.company}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">{submission.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Submitted</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                {submission.createdAt?.toDate().toLocaleString()}
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Project Details</h3>
          <div className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Description</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                {submission.description}
              </dd>
            </div>
            
            {submission.helpTypes.length > 0 && (
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Help Types</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {submission.helpTypes.map((type, index) => (
                    <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary dark:text-primary-light">
                      {type}
                    </span>
                  ))}
                </dd>
              </div>
            )}

            {submission.projectTypes.length > 0 && (
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Types</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {submission.projectTypes.map((type, index) => (
                    <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary dark:text-primary-light">
                      {type}
                    </span>
                  ))}
                </dd>
              </div>
            )}

            {submission.deliverables.length > 0 && (
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Deliverables</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {submission.deliverables.map((item, index) => (
                    <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary dark:text-primary-light">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetail; 