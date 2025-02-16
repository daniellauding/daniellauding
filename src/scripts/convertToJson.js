const fs = require('fs');
const { work } = require('./workDataTemp');

// Make sure the data directory exists
if (!fs.existsSync('src/data')) {
  fs.mkdirSync('src/data');
}

// Helper function to clean and validate dates
const cleanDate = (dateStr) => {
  if (!dateStr) return new Date().toISOString();
  if (dateStr.includes('Present')) return new Date().toISOString();
  // Handle date ranges by taking the first date
  const firstDate = dateStr.split('–')[0].trim();
  return new Date(firstDate).toISOString();
};

// Convert dates to ISO strings and clean up the data
const cleanWork = work.map(client => ({
  name: client.client,
  slug: client.slug,
  location: client.location,
  featured: client.featured || false,
  protected: client.protected || false,
  date: cleanDate(client.date),
  url: client.url || '',
  role: client.role || '',
  background: client.background || {},
  thumbnail: client.thumbnail || [],
  isExternal: client.isExternal || false,
  index: client.index || false,
  cases: (client.cases || []).map(case_ => ({
    title: case_.title || '',
    slug: case_.case || '',
    description: case_.description || '',
    date: cleanDate(case_.date),
    tags: case_.tags || [],
    technologies: case_.technologies || [],
    challenge: case_.challenge || '',
    solution: case_.solution || '',
    results: case_.results || '',
    images: case_.images || []
  }))
}));

// Save to a JSON file
fs.writeFileSync(
  'src/data/work.json',
  JSON.stringify(cleanWork, null, 2)
);

console.log('Work data converted and saved to src/data/work.json'); 