import mongoose, { connection } from "mongoose";


const connect={};

async function dbConnect(){
    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(process.env_MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
    })

    connection.isConnected = db.connect[0].readyState;

}

export default dbConnect;