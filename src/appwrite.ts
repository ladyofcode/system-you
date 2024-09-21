import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://your-appwrite-endpoint') // Your Appwrite Endpoint
    .setProject('your-project-id'); // Your project ID

export const account = new Account(client);
export const databases = new Databases(client);

export { client };