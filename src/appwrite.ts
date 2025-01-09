import { Account, Client, Databases, ID } from "appwrite";
const appwriteEndpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const appwriteProjectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const taskManagerDatabaseId = import.meta.env.VITE_TASK_MANAGER_DATABASE_ID;
const tasksDataCollectionId = import.meta.env.VITE_TASKS_DATA_COLLECTION_ID;

const client = new Client()
  .setEndpoint(appwriteEndpoint)
  .setProject(appwriteProjectId);

const account = new Account(client);
const databases = new Databases(client);

export {
  client,
  account,
  databases,
  taskManagerDatabaseId,
  tasksDataCollectionId,
  ID,
};
