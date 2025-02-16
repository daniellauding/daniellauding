import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, getDocs, query } from 'firebase/firestore';
import { work } from '../../constant'; // Import your existing work array
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
  const [imagePreview, setImagePreview] = useState({
    show: false,
    url: '',
    name: '',
    status: 'pending' // pending, uploaded, failed
  });
  const [showSource, setShowSource] = useState(false);
  const [clientsExpanded, setClientsExpanded] = useState(true);
  const [projectsExpanded, setProjectsExpanded] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(new Map());
  const [includeImages, setIncludeImages] = useState(true);

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

      // Helper function to remove image fields if needed
      const removeImageFields = (obj) => {
        if (!includeImages) {
          const newObj = { ...obj };
          // Remove image-related fields
          delete newObj.thumbnail;
          delete newObj.background;
          if (newObj.content) {
            newObj.content = newObj.content.map(section => {
              const newSection = { ...section };
              delete newSection.image;
              delete newSection.images;
              delete newSection.poster;
              delete newSection.avatar;
              // Handle nested image fields
              if (newSection.before) delete newSection.before.image;
              if (newSection.after) delete newSection.after.image;
              if (newSection.steps) {
                newSection.steps = newSection.steps.map(step => {
                  const newStep = { ...step };
                  delete newStep.image;
                  return newStep;
                });
              }
              return newSection;
            });
          }
          return newObj;
        }
        return obj;
      };

      // Upload selected clients
      for (const client of preview.clients) {
        if (selectedClients.has(client.id)) {
          try {
            const clientData = removeImageFields(client);
            // Remove any undefined values
            Object.keys(clientData).forEach(key => 
              clientData[key] === undefined && delete clientData[key]
            );
            await addDoc(collection(db, 'clients'), clientData);
          } catch (error) {
            console.error(`Failed to upload client ${client.id}:`, error);
            setStatus(`Error uploading client ${client.name}: ${error.message}`);
            return;
          }
        }
      }

      // Upload selected projects
      for (const project of preview.projects) {
        const projectKey = `${project.clientId}-${project.id}`;
        if (selectedProjects.has(projectKey)) {
          try {
            const projectData = removeImageFields(project);
            // Remove any undefined values
            Object.keys(projectData).forEach(key => 
              projectData[key] === undefined && delete projectData[key]
            );
            await addDoc(collection(db, 'projects'), projectData);
          } catch (error) {
            console.error(`Failed to upload project ${project.id}:`, error);
            setStatus(`Error uploading project ${project.title}: ${error.message}`);
            return;
          }
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

  // Add these functions at the top with other state management functions
  const selectAllClients = () => {
    const allClientIds = preview.clients.map(c => c.id);
    setSelectedClients(new Set(allClientIds));
  };

  const selectAllProjects = () => {
    const allProjectIds = preview.projects.map(p => `${p.clientId}-${p.id}`);
    setSelectedProjects(new Set(allProjectIds));
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

  // Add this helper function to collect all images from content
  const collectImagesFromContent = (content) => {
    const images = new Set();
    
    content.forEach(section => {
      // Background images
      if (section.background?.image) {
        images.add(section.background.image);
      }
      
      // Direct images
      if (section.image?.src) {
        images.add(section.image.src);
      }

      // Loop images
      if (section.image?.folder) {
        // We'll need to handle this differently - maybe show a folder structure
        images.add(`folder:${section.image.folder}`);
      }

      // Group images
      if (section.groups?.items) {
        section.groups.items.forEach(item => {
          if (item.image?.src) {
            images.add(item.image.src);
          }
        });
      }
    });

    return Array.from(images);
  };

  // Add this new section type renderer
  const renderSectionByType = (section) => {
    switch (section.section) {
      case 'intro':
        return (
          <CollapsibleSection title="Intro Section" defaultOpen={true}>
            <div className="space-y-2">
              {renderContentSection(section)}
              <div className="text-xs text-gray-500">
                Special intro styling with: {section.padding}
              </div>
            </div>
          </CollapsibleSection>
        );

      case 'bg-brand':
        return (
          <CollapsibleSection title="Brand Background" defaultOpen={true}>
            <div className="space-y-2">
              <div className="relative">
                <img 
                  src={section.background?.image} 
                  alt="Brand Background"
                  className="w-full h-32 object-cover rounded"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                  Full Screen Background
                </div>
              </div>
              <div className="text-xs text-gray-500">
                Classes: {section.class}
              </div>
            </div>
          </CollapsibleSection>
        );

      case 'image-loop':
        return (
          <CollapsibleSection title="Image Loop Gallery" defaultOpen={true}>
            <div className="space-y-2">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                <div className="text-sm font-medium mb-1">Gallery Configuration</div>
                <div className="text-xs space-y-1">
                  <div>Variant: {section.image.variant}</div>
                  <div>Style: {section.image.style}</div>
                  <div>Folder: {section.image.folder}</div>
                  <div>Classes: {section.image.imageClasses}</div>
                </div>
              </div>
              {/* Add folder structure preview here */}
            </div>
          </CollapsibleSection>
        );

      case 'description':
        return (
          <CollapsibleSection title="Description Section" defaultOpen={true}>
            <div className="space-y-2">
              {section.image && (
                <div className="relative group">
                  <img 
                    src={section.image.src} 
                    alt="Description"
                    className="w-full h-32 object-cover rounded"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-xs">
                    {section.image.imgClass}
                  </div>
                </div>
              )}
              {renderContentSection(section)}
            </div>
          </CollapsibleSection>
        );

      case 'the-problem':
      case 'setting-the-goal':
      case 'gaining-insights':
      case 'the-approach':
      case 'the-outcome':
      case 'learnings':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium capitalize">
              {section.section.split('-').join(' ')}
            </h3>
            {section.groups?.items.map((item, idx) => (
              <div key={idx} className="space-y-2">
                {item.text && Array.isArray(item.text) ? (
                  item.text.map((t, i) => (
                    <div key={i} className={`${t.className || ''}`}>
                      <div className={`text-${t.size || 'base'}`}>{t.value}</div>
                    </div>
                  ))
                ) : (
                  <div className={item.text?.className || ''}>
                    <div className={`text-${item.text?.size || 'base'}`}>
                      {item.text?.value}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'video':
        return (
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Video Section</h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
              <div className="text-sm">{section.url || section.embed}</div>
              {section.poster && (
                <img 
                  src={section.poster} 
                  alt="Video Poster"
                  className="mt-2 w-full h-32 object-cover rounded"
                />
              )}
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Gallery Section</h3>
            <div className="grid grid-cols-3 gap-2">
              {section.images?.map((img, idx) => (
                <div key={idx} className="relative group">
                  <img 
                    src={img.src || img} 
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-24 object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all">
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-75 text-white text-xs">
                      {(img.src || img).split('/').pop()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'quote':
        return (
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Quote Section</h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
              <blockquote className="text-lg italic">{section.text}</blockquote>
              {section.author && (
                <cite className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                  — {section.author}
                </cite>
              )}
            </div>
          </div>
        );

      default:
        return renderContentSection(section);
    }
  };

  // Update the uploadToFirebaseStorage function to track progress
  const uploadToFirebaseStorage = async (imageUrl, clientName, projectSlug) => {
    const storage = getStorage();
    
    try {
      const newPath = `clients/${clientName}/${projectSlug}/${imageUrl.split('/').pop()}`;
      const storageRef = ref(storage, newPath);
      
      setUploadProgress(prev => new Map(prev).set(imageUrl, { status: 'fetching', progress: 0 }));
      
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error('Failed to fetch image');
      
      const blob = await response.blob();
      
      // Create upload task
      const uploadTask = uploadBytes(storageRef, blob);
      
      // Track upload progress
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(prev => new Map(prev).set(imageUrl, { 
            status: 'uploading', 
            progress 
          }));
        }
      );
      
      const snapshot = await uploadTask;
      const downloadUrl = await getDownloadURL(snapshot.ref);
      
      setUploadProgress(prev => new Map(prev).set(imageUrl, { 
        status: 'completed', 
        progress: 100 
      }));
      
      return {
        originalPath: imageUrl,
        newPath,
        downloadUrl,
        status: 'uploaded'
      };
    } catch (error) {
      setUploadProgress(prev => new Map(prev).set(imageUrl, { 
        status: 'error', 
        error: error.message 
      }));
      return {
        originalPath: imageUrl,
        error: error.message,
        status: 'failed'
      };
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Data Migration Tool</h2>
      
      <div className="flex gap-2 mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          onClick={validateAndPreview}
        >
          Preview Current Data
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
          onClick={() => setShowSource(!showSource)}
        >
          {showSource ? 'Hide Source' : 'Show Source'}
        </button>
      </div>

      {showSource && (
        <div className="mb-6">
          <pre className="bg-gray-50 dark:bg-gray-800 p-4 rounded overflow-auto max-h-96 text-sm">
            {JSON.stringify(work, null, 2)}
          </pre>
        </div>
      )}

      {/* Step 2: Preview with Selection */}
      {preview && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Step 2: Review and Select Data</h3>
          
          {/* Enhanced Selection Controls */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={selectAllClients}
              >
                Select All Clients
              </button>
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={selectAllProjects}
              >
                Select All Projects
              </button>
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

          <div className="flex items-center gap-4 mb-4">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={includeImages}
                  onChange={(e) => setIncludeImages(e.target.checked)}
                />
                <div className={`block w-14 h-8 rounded-full transition-colors ${
                  includeImages ? 'bg-blue-500' : 'bg-gray-400'
                }`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${
                  includeImages ? 'translate-x-6' : 'translate-x-0'
                }`}></div>
              </div>
              <div className="ml-3 text-gray-700 dark:text-gray-300">
                Include Images
              </div>
            </label>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded space-y-4">
            {/* Clients Section */}
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                className="w-full px-4 py-2 flex items-center justify-between bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setClientsExpanded(!clientsExpanded)}
              >
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Clients ({preview.clients.length})
                </h4>
                <span className="text-gray-500 dark:text-gray-400">
                  {clientsExpanded ? '−' : '+'}
                </span>
              </button>
              
              {clientsExpanded && (
                <div className="p-4">
                  <div className="max-h-[50vh] overflow-auto space-y-2">
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
                </div>
              )}
            </div>

            {/* Projects Section */}
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                className="w-full px-4 py-2 flex items-center justify-between bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setProjectsExpanded(!projectsExpanded)}
              >
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Projects ({preview.projects.length})
                </h4>
                <span className="text-gray-500 dark:text-gray-400">
                  {projectsExpanded ? '−' : '+'}
                </span>
              </button>
              
              {projectsExpanded && (
                <div className="p-4">
                  <div className="max-h-[50vh] overflow-auto space-y-2">
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
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <h5 className="font-medium mb-2">Basic Information</h5>
                                <div>Client: {project.clientName}</div>
                                <div>Date: {project.date}</div>
                                <div>Slug: {project.slug}</div>
                              </div>
                              <div>
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

                            {/* Full width Content Sections */}
                            <div className="w-full">
                              <CollapsibleSection title="Content Sections" defaultOpen={true}>
                                <div className="space-y-4">
                                  {project.content.map((section, idx) => (
                                    <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                                      {renderSectionByType(section)}
                                    </div>
                                  ))}
                                </div>
                              </CollapsibleSection>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
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

      {/* Image Preview Modal */}
      {imagePreview.show && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full mx-4 overflow-hidden">
            <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {imagePreview.name}
              </h3>
              <button 
                onClick={() => setImagePreview({ ...imagePreview, show: false })}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <img 
                src={imagePreview.url} 
                alt={imagePreview.name}
                className="max-h-[70vh] object-contain mx-auto"
              />
            </div>
            <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Original path: {imagePreview.url}
              </div>
              <div className="flex justify-end gap-2">
                <button 
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  onClick={() => setImagePreview({ ...imagePreview, show: false })}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add upload progress indicator */}
      {uploadProgress.size > 0 && (
        <div className="fixed bottom-4 right-4 max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <h4 className="font-medium mb-2">Upload Progress</h4>
          <div className="space-y-2">
            {Array.from(uploadProgress.entries()).map(([url, info]) => (
              <div key={url} className="text-sm">
                <div className="flex justify-between mb-1">
                  <span className="truncate">{url.split('/').pop()}</span>
                  <span>{info.status === 'uploading' ? `${Math.round(info.progress)}%` : info.status}</span>
                </div>
                {info.status === 'uploading' && (
                  <div className="h-1 bg-gray-200 rounded">
                    <div 
                      className="h-full bg-blue-500 rounded transition-all duration-300"
                      style={{ width: `${info.progress}%` }}
                    />
                  </div>
                )}
                {info.status === 'error' && (
                  <div className="text-red-500 text-xs">{info.error}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 