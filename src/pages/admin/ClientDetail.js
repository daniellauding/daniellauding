import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const ClientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        // Fetch client
        const clientDoc = await getDoc(doc(db, "clients", id));
        if (clientDoc.exists()) {
          setClient({ id: clientDoc.id, ...clientDoc.data() });
        }

        // Fetch client's projects
        const projectsQuery = query(
          collection(db, "projects"),
          where("clientId", "==", id)
        );
        const projectsSnap = await getDocs(projectsQuery);
        setProjects(projectsSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })));
      } catch (error) {
        console.error("Error fetching client data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, [id]);

  if (loading) {
    return <div className="text-gray-600 dark:text-gray-400">Loading...</div>;
  }

  if (!client) {
    return <div className="text-gray-600 dark:text-gray-400">Client not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{client.name}</h2>
        <button
          onClick={() => navigate('/admin/clients')}
          className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-lighter"
        >
          ← Back to clients
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white">{client.location}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Website</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white">
              <a href={client.url} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light hover:underline">
                {client.url}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Projects</h3>
          <button
            onClick={() => navigate(`/admin/clients/${id}/projects/new`)}
            className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-lighter"
          >
            Add Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div key={project.id} className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">{project.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(project.date.toDate()).toLocaleDateString()}
                </span>
                <button
                  onClick={() => navigate(`/admin/clients/${id}/projects/${project.id}`)}
                  className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-lighter text-sm"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientDetail; 