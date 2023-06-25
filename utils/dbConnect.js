const mongoose = require('mongoose');

export async function connectToDatabase() {
  try {
    const uri = 'mongodb+srv://app:apptest123@cluster0.aztj2.mongodb.net/aicart?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Additional options...
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}


