const mongoose =  require("mongoose");
require("dotenv").config();

const connectToDb = async() => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log(`Database Connected:${connect.connection.name}`);

    } catch (error) {
        console.error("DB connection failed")
    }
};

module.exports= connectToDb; 