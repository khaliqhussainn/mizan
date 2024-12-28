const { Client, Databases, Storage } = require('appwrite');
require('dotenv').config();

const client = new Client();
client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_API_KEY);

const databases = new Databases(client);
const storage = new Storage(client);

async function getProducts() {
    const products = await databases.listDocuments(process.env.APPWRITE_DATABASE_ID, process.env.APPWRITE_COLLECTION_ID);
    return products;
}

async function getImageUrl(fileId) {
    const file = await storage.getFileView(process.env.APPWRITE_BUCKET_ID, fileId);
    return file.href;
}

async function main() {
    const products = await getProducts();
    for (const product of products.documents) {
        const imageUrl = await getImageUrl(product.imageUrl);
        product.imageUrl = imageUrl;
    }
    console.log(products);
}

main().catch(console.error);



 