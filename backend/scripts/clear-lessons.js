const mongoose = require('mongoose');
require('dotenv').config();

async function clearLessonsAndCourses() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Get collection names to check if course/lesson collections exist
    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);
    
    let deletedLessons = { deletedCount: 0 };
    let deletedCourses = { deletedCount: 0 };
    
    // Delete lessons collection if it exists
    if (collectionNames.includes('lessons')) {
      deletedLessons = await mongoose.connection.db.collection('lessons').deleteMany({});
      console.log(`Deleted ${deletedLessons.deletedCount} lessons`);
    } else {
      console.log('No lessons collection found');
    }
    
    // Delete courses collection if it exists
    if (collectionNames.includes('courses')) {
      deletedCourses = await mongoose.connection.db.collection('courses').deleteMany({});
      console.log(`Deleted ${deletedCourses.deletedCount} courses`);
    } else {
      console.log('No courses collection found');
    }
    
    console.log('Successfully cleared lessons and courses from the database.');
  } catch (error) {
    console.error('Error clearing database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  }
}

clearLessonsAndCourses();