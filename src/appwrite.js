import { Client, Databases, Storage } from 'appwrite';

const client = new Client();

console.log('Endpoint:', process.env.REACT_APP_APPWRITE_ENDPOINT);
console.log('Project:', process.env.REACT_APP_APPWRITE_PROJECT);
console.log('API Key:', process.env.REACT_APP_APPWRITE_API_KEY);

client
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT)
    .setKey(process.env.REACT_APP_APPWRITE_API_KEY); // Add this line to set the API key

const databases = new Databases(client);
const storage = new Storage(client);

export const appwriteService = {
    // Fetch stitched clothes
    getStitchedClothes: async () => {
        try {
            const response = await databases.listDocuments(
                process.env.REACT_APP_APPWRITE_DATABASE_ID,
                process.env.REACT_APP_APPWRITE_COLLECTION_ID_STITCHED
            );
            return response.documents;
        } catch (error) {
            console.error('Error fetching stitched clothes:', error);
            return [];
        }
    },

    // Fetch unstitched clothes
    getUnstitchedClothes: async () => {
        try {
            const response = await databases.listDocuments(
                process.env.REACT_APP_APPWRITE_DATABASE_ID,
                process.env.REACT_APP_APPWRITE_COLLECTION_ID_UNSTITCHED
            );
            return response.documents;
        } catch (error) {
            console.error('Error fetching unstitched clothes:', error);
            return [];
        }
    },

    // Get image URL from file ID
    getImageUrl: (fileId, bucketId) => {
        try {
            return storage.getFileView(bucketId, fileId).href;
        } catch (error) {
            console.error('Error getting image URL:', error);
            return null;
        }
    }
};
