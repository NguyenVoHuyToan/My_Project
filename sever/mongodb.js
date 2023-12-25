import { MongoClient } from 'mongodb';
import {config} from 'dotenv'

config()
// MongoDB connection URL
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@huytoan.8kpntu8.mongodb.net/`;

// Database Name
const dbName = 'my_project_db';

// Function to connect to MongoDB
class DatabaseService {
    constructor() {
      this.client = new MongoClient(uri);
      this.db = this.client.db(process.env.DB_USERNAME);
    }
    run() {
      try {
        this.client.connect();
      } catch (error) {
        console.log("error", error);
      }
    }
    get project_database() {
      return this.db.collection("project_database");
    }
}
const databaseProject = DatabaseService()
export default databaseProject;