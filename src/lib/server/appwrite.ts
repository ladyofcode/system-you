import { Client, Databases } from "node-appwrite";

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const getResources = async () => {
    console.log("getResources function called");
    try {
        console.log("Creating Databases instance");
        const databases = new Databases(client);

        if (!process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || !process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID) {
            throw new Error("Database ID or Collection ID is not set");
        }

        console.log("Calling listDocuments");
        const response = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!
        );
        
        console.log("Response received:", response);

        return response.documents;
    } catch (error) {
        console.error('Error in getResources:', error);
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        throw error;
    }
};

export const getResourceById = async (id: string) => {
    try {
        const databases = new Databases(client);
        const response = await databases.getDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
            id
        );
        return response;
    } catch (error) {
        console.error('Error fetching resource:', error);
        throw error;
    }
};
