import { MongoClient } from 'mongodb';
import {config} from 'dotenv'

config()
// MongoDB connection URL
const pass=process.env.PASS;
const url = `mongodb+srv://lightwing2208:${pass}@database.t4myp8j.mongodb.net/`;

// Database Name


// Function to connect to MongoDB
class DatabaseService {
    constructor() {
      this.client = new MongoClient(url);
      this.db = this.client.db(process.env.DB_NAME);
    }
    run() {
      try {
        this.client.connect();
      } catch (error) {
        console.log("error", error);
      }
    }
    get users() {
      return this.db.collection("users");
    }
    get inventory() {
      return this.db.collection("inventory");
    }
    get cart(){
      return this.db.collection("cart");
    }
}
const databaseProject = new DatabaseService()
export default databaseProject;