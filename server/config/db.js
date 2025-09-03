import mongoose from 'mongoose';

//Function to connect to the MONGODB database
const connectDB = async() => {
      mongoose.connection.on('connected', () => {
        console.log('Database connected!');
      })

      await mongoose.connect(`${process.env.MONGO_URI}/job-portal`)
}

export default connectDB;