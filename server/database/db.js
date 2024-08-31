import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://kamdeyash03:eZIVIh8c7LOBrwSH@blog-app-shard-00-00.pfgiq.mongodb.net:27017,blog-app-shard-00-01.pfgiq.mongodb.net:27017,blog-app-shard-00-02.pfgiq.mongodb.net:27017/?ssl=true&replicaSet=atlas-o24462-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;