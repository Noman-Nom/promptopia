import mongosse from 'mongoose';

let isConnected = false;  // track the connection

export const connectToDB = async ()=>{

    mongosse.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongosse.connect(process.env.MONGODB_URI,{
            dbName: 'shear_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })

        isConnected= true;
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(error)
    }


}
