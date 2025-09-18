const mongoose = require('mongoose');
require('dotenv').config();
const Lesson = require('../models/lesson');
const Course = require('../models/course');

const lessonData = {
  title: "Scalars & Vectors in 8D",
  description: "Learn about vector quantities in two-dimensional space",
  estimatedTime: "20 minutes",
  difficulty: "Beginner",
  youtubeVideoId: "WRAbUNqal6g",
  videoTitle: "Introduction to 2D Vectors",
  videoDuration: "12:34",
  questions: [
    { 
      type: 'math-input', 
      question: "According to Newton's second law (F = ma), what is the acceleration of an object when a force F is applied to it? Express your answer as a mathematical expression in terms of F and m.", 
      mathAnswer: "\\frac{F}{m}", 
      explanation: "From Newton's second law F = ma, we can solve for acceleration: a = F/m. The acceleration is equal to the force divided by the mass of the object." 
    },
    { 
      type: 'math-input', 
      question: "The electric field E at distance r from a point charge q is given by Coulomb's law. Express the electric field strength in terms of k (Coulomb's constant), q, and r.", 
      mathAnswer: "\\frac{kq}{r^2}", 
      explanation: "Coulomb's law for electric field is E = kq/r², where k is Coulomb's constant. The electric field strength decreases with the square of the distance from the charge. Note: qk/r² is also correct due to the commutative property of multiplication." 
    },
    { 
      type: 'multiple-choice', 
      question: "Which of the following is an example of a vector quantity?", 
      options: ["Temperature","Mass","Displacement","Time"], 
      correctAnswer: 2, 
      explanation: "Displacement is a vector quantity because it has both magnitude (how far) and direction (which way). Temperature, mass, and time are scalar quantities." 
    }
  ]
};

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await Lesson.deleteMany({});
    await Course.deleteMany({});
    
    // Create the lesson with custom id field
    const lesson = await Lesson.create({
      id: '102', // Custom id for easy reference
      ...lessonData
    });
    
    // Create the course with the lesson
    const course = await Course.create({
      name: "ap-physics-1",
      lessons: [lesson._id]
    });
    
    console.log('Database seeded successfully!');
    console.log(`Created course: ${course.name}`);
    console.log(`Added lesson: ${lesson.title}`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

seedDatabase();