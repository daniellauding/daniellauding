import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { 
  HomeIcon, 
  BriefcaseIcon,
  InboxIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import DashboardHome from './DashboardHome';
import ClientsList from './ClientsList';
import ClientDetail from './ClientDetail';
import SubmissionsList from './SubmissionsList';
import SubmissionDetail from './SubmissionDetail';
import ClientProjects from './ClientProjects';
import ProjectDetail from './ProjectDetail';
import ClientSettings from './ClientSettings';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [recentSubmissions, setRecentSubmissions] = useState([]);
  const [recentProjects, setRecentProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        // Fetch recent projects
        const projectsQuery = query(
          collection(db, 'projects'), 
          orderBy('date', 'desc'), 
          limit(5)
        );
        const projectsSnap = await getDocs(projectsQuery);
        setRecentProjects(projectsSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })));

        // Fetch recent submissions
        const submissionsQuery = query(
          collection(db, 'submissions'), 
          orderBy('createdAt', 'desc'), 
          limit(5)
        );
        const submissionsSnap = await getDocs(submissionsQuery);
        setRecentSubmissions(submissionsSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })));

      } catch (error) {
        console.error('Error fetching recent data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentData();
  }, []);

  // Disable keyboard shortcuts in admin
  useEffect(() => {
    const isAdminRoute = location.pathname.startsWith('/admin');
    if (isAdminRoute) {
      // Store original keydown handlers
      const originalKeydown = window.onkeydown;
      
      // Disable keydown events
      window.onkeydown = (e) => {
        // Still allow basic functionality like tab navigation
        if (e.key === 'Tab') return true;
        // Prevent other keyboard shortcuts
        if (e.key.length === 1 || e.key === 'Escape') {
          e.stopPropagation();
        }
      };

      // Cleanup
      return () => {
        window.onkeydown = originalKeydown;
      };
    }
  }, [location]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/admin'); // Redirect to admin instead of login
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top Bar */}
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2"
          >
            <UserCircleIcon className="h-5 w-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Side Navigation */}
      <div className="flex">
        <div className="w-64 bg-white dark:bg-gray-800 shadow-sm h-[calc(100vh-64px)] p-4">
          <nav className="space-y-2">
            <Link 
              to="/admin" 
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Dashboard
            </Link>
            <Link 
              to="/admin/clients" 
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              <BriefcaseIcon className="h-5 w-5 mr-2" />
              Clients & Projects
            </Link>
            <Link 
              to="/admin/submissions" 
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              <InboxIcon className="h-5 w-5 mr-2" />
              Submissions
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 bg-gray-100 dark:bg-gray-900">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-lg text-gray-600 dark:text-gray-300">Loading...</div>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/clients" element={<ClientsList />} />
              <Route path="/clients/:id/*" element={<ClientDetail />}>
                <Route path="projects" element={<ClientProjects />} />
                <Route path="projects/:projectId" element={<ProjectDetail />} />
                <Route path="settings" element={<ClientSettings />} />
              </Route>
              <Route path="/submissions" element={<SubmissionsList />} />
              <Route path="/submissions/:id" element={<SubmissionDetail />} />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 