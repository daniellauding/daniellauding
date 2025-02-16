import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, getDocs, query } from 'firebase/firestore';
import { work } from '../../constant'; // Import your existing work array

export default function DataMigration() {
  const [status, setStatus] = useState('');
  const [preview, setPreview] = useState(null);
  const [selectedClients, setSelectedClients] = useState(new Set());
  const [selectedProjects, setSelectedProjects] = useState(new Set());
  const [step, setStep] = useState(1);
  const [expandedClient, setExpandedClient] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [viewMode, setViewMode] = useState('list');

  const handleDataPaste = (e) => {
    setJsonData(e.target.value);
    setPreview(null);
    setStep(1);
  };

  const validateAndPreview = () => {
    try {
      setStatus('Validating data...');
      
      // Convert work array to clients & projects structure
      const clients = work.map(item => ({
        id: item.id,
        name: item.client,
        slug: item.slug,
        role: item.role,
        date: item.date,
        location: item.location,
        featured: item.featured || false,
        url: item.url,
        protected: item.protected || false,
        background: item.background || {},
        thumbnail: item.thumbnail || [],
        isExternal: item.isExternal || false,
        index: item.index || false
      }));

      const projects = work.reduce((acc, item) => {
        if (item.cases) {
          const clientProjects = item.cases.map(project => ({
            clientId: item.id,
            clientName: item.client,
            id: project.id,
            slug: project.case,
            title: project.title,
            tags: project.tags || [],
            content: project.content || [],
            description: project.description,
            shortDescription: project.shortDescription,
            date: project.date,
            technologies: project.technologies || [],
            challenge: project.challenge,
            solution: project.solution,
            results: project.results,
            images: project.images || []
          }));
          return [...acc, ...clientProjects];
        }
        return acc;
      }, []);

      setPreview({ clients, projects });
      setStatus('Data validated successfully! Review the preview below.');
    } catch (error) {
      setStatus(`Validation Error: ${error.message}`);
      setPreview(null);
    }
  };

  const checkExistingData = async () => {
    const clientsSnapshot = await getDocs(query(collection(db, 'clients')));
    const projectsSnapshot = await getDocs(query(collection(db, 'projects')));
    
    return {
      clientsCount: clientsSnapshot.size,
      projectsCount: projectsSnapshot.size
    };
  };

  const uploadToFirebase = async () => {
    try {
      if (!preview) {
        validateAndPreview();
      }

      // Check existing data
      const existing = await checkExistingData();
      if (existing.clientsCount > 0 || existing.projectsCount > 0) {
        if (!window.confirm(`Found existing data (${existing.clientsCount} clients, ${existing.projectsCount} projects). Continue with upload?`)) {
          return;
        }
      }

      setStatus('Uploading to Firebase...');
      
      // Upload selected clients
      for (const client of preview.clients) {
        if (selectedClients.has(client.id)) {
          await addDoc(collection(db, 'clients'), client);
        }
      }

      // Upload selected projects
      for (const project of preview.projects) {
        const projectKey = `${project.clientId}-${project.id}`;
        if (selectedProjects.has(projectKey)) {
          await addDoc(collection(db, 'projects'), project);
        }
      }

      setStatus('Upload completed successfully!');
    } catch (error) {
      setStatus(`Error: ${error.message}`);
      console.error('Upload error:', error);
    }
  };

  const toggleClientSelection = (clientId) => {
    const newSelected = new Set(selectedClients);
    if (newSelected.has(clientId)) {
      newSelected.delete(clientId);
    } else {
      newSelected.add(clientId);
    }
    setSelectedClients(newSelected);
  };

  const toggleProjectSelection = (projectId) => {
    const newSelected = new Set(selectedProjects);
    if (newSelected.has(projectId)) {
      newSelected.delete(projectId);
    } else {
      newSelected.add(projectId);
    }
    setSelectedProjects(newSelected);
  };

  const selectAll = () => {
    const allClientIds = preview.clients.map(c => c.id);
    const allProjectIds = preview.projects.map(p => `${p.clientId}-${p.id}`);
    setSelectedClients(new Set(allClientIds));
    setSelectedProjects(new Set(allProjectIds));
  };

  const deselectAll = () => {
    setSelectedClients(new Set());
    setSelectedProjects(new Set());
  };

  const selectByYear = (year) => {
    const matchingClients = preview.clients.filter(client => 
      client.date.includes(year)
    ).map(c => c.id);
    
    const matchingProjects = preview.projects.filter(project => 
      project.date.includes(year)
    ).map(p => `${p.clientId}-${p.id}`);

    setSelectedClients(new Set(matchingClients));
    setSelectedProjects(new Set(matchingProjects));
  };

  const selectFeatured = () => {
    const featuredClients = preview.clients.filter(client => 
      client.featured
    ).map(c => c.id);
    
    setSelectedClients(new Set(featuredClients));
  };

  const selectWithCases = () => {
    const clientsWithCases = preview.clients.filter(client =>
      preview.projects.some(p => p.clientId === client.id)
    ).map(c => c.id);

    const allProjects = preview.projects.map(p => `${p.clientId}-${p.id}`);
    
    setSelectedClients(new Set(clientsWithCases));
    setSelectedProjects(new Set(allProjects));
  };

  const selectProtected = () => {
    const protectedClients = preview.clients.filter(client => 
      client.protected
    ).map(c => c.id);
    setSelectedClients(new Set(protectedClients));
  };

  const selectExternal = () => {
    const externalClients = preview.clients.filter(client => 
      client.isExternal
    ).map(c => c.id);
    setSelectedClients(new Set(externalClients));
  };

  const selectByLocation = (location) => {
    const matchingClients = preview.clients.filter(client => 
      client.location.toLowerCase().includes(location.toLowerCase())
    ).map(c => c.id);
    
    const matchingProjects = preview.projects.filter(project => 
      preview.clients.find(c => c.id === project.clientId)?.location.toLowerCase().includes(location.toLowerCase())
    ).map(p => `${p.clientId}-${p.id}`);

    setSelectedClients(new Set(matchingClients));
    setSelectedProjects(new Set(matchingProjects));
  };

  // Add this helper function for collapsible sections
  const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    
    return (
      <div className="border dark:border-gray-700 rounded-lg mb-2">
        <button
          className="w-full px-4 py-2 flex items-center justify-between text-left bg-gray-50 dark:bg-gray-800 rounded-t-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium text-gray-700 dark:text-gray-300">{title}</span>
          <span className="text-gray-500 dark:text-gray-400">
            {isOpen ? '−' : '+'}
          </span>
        </button>
        {isOpen && (
          <div className="p-4 bg-white dark:bg-gray-900">
            {children}
          </div>
        )}
      </div>
    );
  };

  // Update the renderContentSection function
  const renderContentSection = (section) => {
    const parts = [];

    // Render text content
    if (section.text) {
      parts.push(
        <CollapsibleSection key="text" title="Text Content" defaultOpen={true}>
          {Array.isArray(section.text) ? (
            <div className="space-y-2">
              {section.text.map((t, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Text Item {i + 1}</div>
                  <div className="pl-2">
                    <div className="text-sm mb-1">{t.value}</div>
                    <div className="flex gap-2 text-xs">
                      {t.size && (
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                          Size: {t.size}
                        </span>
                      )}
                      {t.className && (
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded">
                          Class: {t.className}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
              <div className="text-sm mb-2">{section.text.value}</div>
              <div className="flex gap-2 text-xs">
                {section.text.size && (
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                    Size: {section.text.size}
                  </span>
                )}
                {section.text.align && (
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
                    Align: {Object.entries(section.text.align).map(([k, v]) => `${k}: ${v}`).join(', ')}
                  </span>
                )}
              </div>
            </div>
          )}
        </CollapsibleSection>
      );
    }

    // Render groups content
    if (section.groups) {
      parts.push(
        <CollapsibleSection key="groups" title="Groups Content" defaultOpen={true}>
          <div className="space-y-3">
            {section.groups.class && (
              <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded">
                Group Class: {section.groups.class}
              </div>
            )}
            {section.groups.items?.map((item, i) => (
              <div key={i} className="border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Item {i + 1}</div>
                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                  {item.columns && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Columns: {item.columns}
                    </div>
                  )}
                  {item.class && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Class: {item.class}
                    </div>
                  )}
                  {item.text && (
                    <div className="pl-2">
                      {Array.isArray(item.text) ? (
                        item.text.map((t, j) => (
                          <div key={j} className="mb-2">
                            <div className="text-sm">{t.value}</div>
                            <div className="flex gap-2 text-xs mt-1">
                              {t.size && (
                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                                  Size: {t.size}
                                </span>
                              )}
                              {t.className && (
                                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded">
                                  Class: {t.className}
                                </span>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-sm">{item.text.value}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      );
    }

    // Render additional properties
    if (section.background || section.class || section.padding || section.image) {
      parts.push(
        <CollapsibleSection key="properties" title="Section Properties">
          <div className="grid grid-cols-2 gap-2">
            {section.class && (
              <div className="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">
                <span className="text-gray-500 dark:text-gray-400">Class:</span>
                <div className="text-sm mt-1">{section.class}</div>
              </div>
            )}
            {section.padding && (
              <div className="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">
                <span className="text-gray-500 dark:text-gray-400">Padding:</span>
                <div className="text-sm mt-1">{section.padding}</div>
              </div>
            )}
            {section.background && (
              <div className="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">
                <span className="text-gray-500 dark:text-gray-400">Background:</span>
                <div className="text-sm mt-1">
                  {section.background.image && (
                    <div className="relative group">
                      <img 
                        src={section.background.image}
                        alt="Background"
                        className="w-full h-16 object-cover rounded mt-1"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {section.background.image.split('/').pop()}
                      </div>
                    </div>
                  )}
                  {section.background.color && (
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: section.background.color }}
                      />
                      {section.background.color}
                    </div>
                  )}
                </div>
              </div>
            )}
            {section.image && (
              <div className="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">
                <span className="text-gray-500 dark:text-gray-400">Image:</span>
                <div className="text-sm mt-1">
                  {section.image.src && (
                    <div className="relative group">
                      <img 
                        src={section.image.src}
                        alt="Section"
                        className="w-full h-16 object-cover rounded mt-1"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {section.image.src.split('/').pop()}
                      </div>
                    </div>
                  )}
                  {section.image.imgClass && (
                    <div className="mt-1">Class: {section.image.imgClass}</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CollapsibleSection>
      );
    }

    return parts;
  };

  return (
    <div className="p-4 max-w-4xl mx-auto dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Data Migration Tool</h2>
      
      <div className="mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          onClick={validateAndPreview}
        >
          Preview Current Data
        </button>
      </div>

      {/* Step 2: Preview with Selection */}
      {preview && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Step 2: Review and Select Data</h3>
          
          {/* Enhanced Selection Controls */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={selectAll}
              >
                Select All
              </button>
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={deselectAll}
              >
                Deselect All
              </button>
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={selectFeatured}
              >
                Select Featured
              </button>
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={selectWithCases}
              >
                Select With Cases
              </button>
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={selectProtected}
              >
                Protected Items
              </button>
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={selectExternal}
              >
                External Items
              </button>
              <select
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  if (e.target.value !== 'all') {
                    selectByYear(e.target.value);
                  }
                }}
              >
                <option value="all">Select by Year...</option>
                {Array.from(new Set(preview.clients.map(c => c.date.split(' ')[0]))).sort().reverse().map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <select
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                onChange={(e) => e.target.value && selectByLocation(e.target.value)}
              >
                <option value="">Select by Location...</option>
                {Array.from(new Set(preview.clients.map(c => c.location))).sort().map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">
                Selected: {selectedClients.size} clients, {selectedProjects.size} projects
              </span>
            </div>
            
            {/* Search and View Controls */}
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Filter items..."
                className="px-3 py-1 border rounded flex-grow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
              <div className="flex gap-1">
                <button
                  className={`px-3 py-1 rounded transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-500 text-white dark:bg-blue-600' 
                      : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
                  }`}
                  onClick={() => setViewMode('list')}
                >
                  List
                </button>
                <button
                  className={`px-3 py-1 rounded transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-500 text-white dark:bg-blue-600' 
                      : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
                  }`}
                  onClick={() => setViewMode('grid')}
                >
                  Grid
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
            {/* Clients Section */}
            <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Clients ({preview.clients.length})</h4>
            <div className="max-h-60 overflow-auto mb-4 space-y-2">
              {preview.clients.map(client => (
                <div key={client.id} className="border dark:border-gray-700 rounded p-2 bg-white dark:bg-gray-900">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedClients.has(client.id)}
                      onChange={() => toggleClientSelection(client.id)}
                      className="mr-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="flex-1 text-gray-800 dark:text-gray-200">{client.name} - {client.role}</span>
                    <button
                      onClick={() => setExpandedClient(expandedClient === client.id ? null : client.id)}
                      className="text-blue-500 dark:text-blue-400 text-sm hover:text-blue-600 dark:hover:text-blue-300"
                    >
                      {expandedClient === client.id ? 'Less' : 'More'}
                    </button>
                  </div>
                  
                  {expandedClient === client.id && (
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 pl-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="mb-4">
                            <h5 className="font-medium mb-2">Basic Information</h5>
                            <div>Location: {client.location}</div>
                            <div>Date: {client.date}</div>
                            <div>URL: <a href={client.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{client.url}</a></div>
                          </div>
                          <div className="mb-4">
                            <h5 className="font-medium mb-2">Status</h5>
                            <div className="grid grid-cols-2 gap-2">
                              <div className={`px-2 py-1 rounded ${client.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                Featured: {client.featured ? '✓' : '✗'}
                              </div>
                              <div className={`px-2 py-1 rounded ${client.protected ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                                Protected: {client.protected ? '✓' : '✗'}
                              </div>
                              <div className={`px-2 py-1 rounded ${client.isExternal ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                                External: {client.isExternal ? '✓' : '✗'}
                              </div>
                              <div className={`px-2 py-1 rounded ${client.index ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                                Indexed: {client.index ? '✓' : '✗'}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          {client.thumbnail && client.thumbnail.length > 0 && (
                            <div className="mb-4">
                              <h5 className="font-medium mb-2">Thumbnails ({client.thumbnail.length})</h5>
                              <div className="grid grid-cols-3 gap-2">
                                {client.thumbnail.map((thumb, idx) => (
                                  <div key={idx} className="relative group">
                                    <img 
                                      src={thumb} 
                                      alt={`${client.name} thumbnail ${idx + 1}`}
                                      className="w-full h-16 object-cover rounded"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                      {thumb.split('/').pop()}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {client.background?.image && (
                            <div>
                              <h5 className="font-medium mb-2">Background Image</h5>
                              <div className="relative group">
                                <img 
                                  src={client.background.image} 
                                  alt={`${client.name} background`}
                                  className="w-full h-24 object-cover rounded"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  {client.background.image.split('/').pop()}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      {preview.projects.filter(p => p.clientId === client.id).length > 0 && (
                        <div className="mt-4">
                          <h5 className="font-medium mb-2">Associated Projects</h5>
                          <div className="grid grid-cols-2 gap-2">
                            {preview.projects.filter(p => p.clientId === client.id).map(project => (
                              <div key={project.id} className="text-xs bg-gray-50 p-2 rounded">
                                {project.title}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Projects Section */}
            <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Projects ({preview.projects.length})</h4>
            <div className="max-h-60 overflow-auto space-y-2">
              {preview.projects.map(project => (
                <div key={`${project.clientId}-${project.id}`} className="border dark:border-gray-700 rounded p-2 bg-white dark:bg-gray-900">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedProjects.has(`${project.clientId}-${project.id}`)}
                      onChange={() => toggleProjectSelection(`${project.clientId}-${project.id}`)}
                      className="mr-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="flex-1 text-gray-800 dark:text-gray-200">{project.title} ({project.clientName})</span>
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="text-blue-500 dark:text-blue-400 text-sm hover:text-blue-600 dark:hover:text-blue-300"
                    >
                      {expandedProject === project.id ? 'Less' : 'More'}
                    </button>
                  </div>

                  {expandedProject === project.id && (
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 pl-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="mb-4">
                            <h5 className="font-medium mb-2">Basic Information</h5>
                            <div>Client: {project.clientName}</div>
                            <div>Date: {project.date}</div>
                            <div>Slug: {project.slug}</div>
                          </div>
                          <div className="mb-4">
                            <h5 className="font-medium mb-2">Tags & Technologies</h5>
                            <div className="mb-2">
                              <div className="text-xs text-gray-500 mb-1">Tags:</div>
                              <div>
                                {project.tags.map(tag => (
                                  <span key={tag} className="inline-block bg-gray-100 rounded px-2 py-1 text-xs mr-1 mb-1">{tag}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500 mb-1">Technologies:</div>
                              <div>
                                {project.technologies.map(tech => (
                                  <span key={tech} className="inline-block bg-blue-100 rounded px-2 py-1 text-xs mr-1 mb-1">{tech}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="mb-4">
                            <h5 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Content Sections</h5>
                            <div className="space-y-4">
                              {project.content.map((section, idx) => (
                                <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                                  <div className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {section.section} {section.id !== undefined && `(ID: ${section.id})`}
                                  </div>
                                  {renderContentSection(section)}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
            onClick={uploadToFirebase}
            disabled={selectedClients.size === 0 && selectedProjects.size === 0}
          >
            Upload Selected Items
          </button>
        </div>
      )}

      {/* Status */}
      {status && (
        <div className={`mt-4 p-3 rounded ${
          status.includes('Error') 
            ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300' 
            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
        }`}>
          {status}
        </div>
      )}
    </div>
  );
} 