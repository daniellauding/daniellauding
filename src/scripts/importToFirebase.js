const admin = require('firebase-admin');
const fs = require('fs');

// Initialize Firebase Admin
const serviceAccount = require('../../path-to-your-service-account.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function importData() {
  try {
    // Read the JSON file
    const workData = JSON.parse(fs.readFileSync('src/data/work.json', 'utf8'));
    
    console.log('Starting import...');
    
    for (const client of workData) {
      // Create client document
      const clientRef = await db.collection('clients').add({
        name: client.name,
        slug: client.slug,
        location: client.location,
        featured: client.featured,
        protected: client.protected,
        date: new Date(client.date),
        url: client.url,
        description: client.description,
        category: client.category,
        tags: client.tags,
        technologies: client.technologies,
        industry: client.industry,
        services: client.services,
        teamSize: client.teamSize,
        duration: client.duration,
        role: client.role,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      
      console.log(`Created client: ${client.name}`);

      // Create projects for this client
      for (const case_ of client.cases) {
        await db.collection('projects').add({
          clientId: clientRef.id,
          ...case_,
          date: new Date(case_.date),
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
        
        console.log(`Created project: ${case_.title}`);
      }
    }

    console.log('Import completed successfully!');
  } catch (error) {
    console.error('Error during import:', error);
  }
}

importData(); 