import {MongoClient} from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'don-luis-store';

export async function connectDB() {
  const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  
  try {
    await client.connect();
    console.log('conectado a mongo');
    return client.db(dbName)
    
  } catch (error) {
    console.error('Error en la conexion ', error);
    throw error;
  }
}