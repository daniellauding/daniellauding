// First, install required packages:
// npm install --save-dev @babel/node @babel/core @babel/preset-env

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, getDocs, deleteDoc, Timestamp } = require('firebase/firestore');
const { getAuth, signInWithEmailAndPassword, connectAuthEmulator } = require('firebase/auth');
const { connectFirestoreEmulator } = require('firebase/firestore');
const { work } = require('./workData');  // Use the new CommonJS data file
const fetch = require('node-fetch');
const fs = require('fs').promises;

// Required for Firebase to work in Node.js
global.fetch = fetch;

const firebaseConfig = {
  apiKey: 'AIzaSyDzCqwhB7TQ0Gh9b39sO619iPbTxEk00RE',
  authDomain: 'daniellauding-1a091.firebaseapp.com',
  databaseURL: 'https://daniellauding-1a091.firebaseio.com',
  projectId: 'daniellauding-1a091',
  storageBucket: 'daniellauding-1a091.appspot.com',
  messagingSenderId: '571286512736',
  appId: '1:571286512736:web:58b2fb5c85514b35848f05',
  measurementId: 'G-7FYY5ZS384',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// If you're using Firebase Emulators (optional)
// connectAuthEmulator(auth, "http://localhost:9099");
// connectFirestoreEmulator(db, 'localhost', 8080);

// Validation functions
const validateClient = (client) => {
  const required = ['client', 'slug', 'location', 'date'];
  const missing = required.filter(field => !client[field]);
  if (missing.length > 0) {
    throw new Error(`Client missing required fields: ${missing.join(', ')}`);
  }
};

const validateProject = (project) => {
  const required = ['title', 'description', 'date'];
  const missing = required.filter(field => !project[field]);
  if (missing.length > 0) {
    throw new Error(`Project missing required fields: ${missing.join(', ')}`);
  }
};

// Backup current data
const backupCurrentData = async () => {
  const backup = {
    clients: [],
    projects: []
  };

  const clientsSnap = await getDocs(collection(db, 'clients'));
  const projectsSnap = await getDocs(collection(db, 'projects'));

  backup.clients = clientsSnap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  backup.projects = projectsSnap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  await fs.writeFile(`backup-${timestamp}.json`, JSON.stringify(backup, null, 2));
  return backup;
};

// Rollback function
const rollback = async (backup) => {
  console.log('Rolling back changes...');
  
  // Delete all current data
  const clientsSnap = await getDocs(collection(db, 'clients'));
  const projectsSnap = await getDocs(collection(db, 'projects'));
  
  for (const doc of clientsSnap.docs) {
    await deleteDoc(doc.ref);
  }
  for (const doc of projectsSnap.docs) {
    await deleteDoc(doc.ref);
  }

  // Restore from backup
  for (const client of backup.clients) {
    const { id, ...clientData } = client;
    await addDoc(collection(db, 'clients'), clientData);
  }
  for (const project of backup.projects) {
    const { id, ...projectData } = project;
    await addDoc(collection(db, 'projects'), projectData);
  }

  console.log('Rollback completed');
};

const migrateWorkData = async (email, password, dryRun = false) => {
  let backup;
  
  try {
    // First authenticate
    await signInWithEmailAndPassword(auth, email, password);
    console.log('Authentication successful');

    // Create backup before migration
    console.log('Creating backup...');
    backup = await backupCurrentData();
    console.log('Backup created successfully');

    console.log(dryRun ? 'Starting dry run...' : 'Starting migration...');
    
    // Validate all data first
    console.log('Validating data...');
    for (const client of work) {
      validateClient(client);
      if (client.cases) {
        for (const case_ of client.cases) {
          validateProject(case_);
        }
      }
    }

    if (!dryRun) {
      for (const client of work) {
        const clientData = {
          name: client.client,
          slug: client.slug,
          location: client.location,
          featured: client.featured || false,
          protected: client.protected || false,
          date: Timestamp.fromDate(new Date(client.date)),
          url: client.url || '',
          description: client.description || '',
          category: client.category || '',
          tags: client.tags || [],
          technologies: client.technologies || [],
          industry: client.industry || '',
          services: client.services || [],
          teamSize: client.teamSize || '',
          duration: client.duration || '',
          role: client.role || '',
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
        };

        const clientDoc = await addDoc(collection(db, 'clients'), clientData);
        console.log(`Created client: ${clientData.name}`);

        if (client.cases && client.cases.length > 0) {
          for (const case_ of client.cases) {
            const projectData = {
              clientId: clientDoc.id,
              title: case_.title || '',
              slug: case_.slug || '',
              case: case_.case || '',
              description: case_.description || '',
              shortDescription: case_.shortDescription || '',
              date: Timestamp.fromDate(new Date(case_.date)),
              images: case_.images || [],
              challenge: case_.challenge || '',
              solution: case_.solution || '',
              results: case_.results || '',
              testimonial: case_.testimonial || '',
              technologies: case_.technologies || [],
              services: case_.services || [],
              team: case_.team || [],
              deliverables: case_.deliverables || [],
              duration: case_.duration || '',
              status: case_.status || 'completed',
              featured: case_.featured || false,
              videoUrl: case_.videoUrl || '',
              liveUrl: case_.liveUrl || '',
              createdAt: Timestamp.now(),
              updatedAt: Timestamp.now()
            };

            await addDoc(collection(db, 'projects'), projectData);
            console.log(`Created project: ${projectData.title}`);
          }
        }
      }
    }

    console.log(dryRun ? 'Dry run completed successfully!' : 'Migration completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error);
    if (backup && !dryRun) {
      console.log('Error occurred, initiating rollback...');
      await rollback(backup);
    }
    process.exit(1);
  }
};

// Get command line arguments
const [,, email, password] = process.argv;
const dryRun = process.argv.includes('--dry-run');

if (!email || !password) {
  console.log('Please provide email and password:');
  console.log('node src/scripts/migrateWorkData.js your@email.com yourpassword [--dry-run]');
} else {
  migrateWorkData(email, password, dryRun);
}

module.exports = { migrateWorkData }; 