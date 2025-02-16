import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { work } from '../src/constant';

const firebaseConfig = {
  // Your config...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedWorkData() {
  try {
    // Add clients
    for (const client of work) {
      const clientDoc = await addDoc(collection(db, 'clients'), {
        name: client.client,
        slug: client.slug,
        location: client.location,
        featured: client.featured,
        protected: client.protected,
        date: client.date,
        url: client.url
      });

      // Add cases/projects for each client
      if (client.cases) {
        for (const case_ of client.cases) {
          await addDoc(collection(db, 'projects'), {
            clientId: clientDoc.id,
            name: case_.title,
            description: case_.description,
            status: 'completed',
            startDate: case_.date,
            case: case_.case,
            images: case_.images || []
          });
        }
      }
    }
    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seedWorkData(); 