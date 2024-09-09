const mongoose = require('mongoose');

// fucntion to connect to mongo DataBase 
async function connectToMongoDB() {
    // const url = process.env.MONGODB_URL;
    const url = "mongodb+srv://pawanshekhawat2402:57Qs3iUB723WcO5R@cluster0.inibxa0.mongodb.net/scrap-seekers?retryWrites=true&w=majority&appName=Cluster0";
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        throw new Error("cannot connect to DataBase");
    }
}


// function to disconnect to mongo DataBase
async function disconnectToMongoDataBase() {
    try {
        await mongoose.disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Couldn't disconnect from data base");
    }
}


// Call the function to connect and disconnect to MongoDB
module.exports = { connectToMongoDB, disconnectToMongoDataBase };