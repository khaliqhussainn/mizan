import { Client, Account, ID } from 'appwrite';

const client = new Client();

if (!process.env.REACT_APP_APPWRITE_ENDPOINT || !process.env.REACT_APP_APPWRITE_PROJECT) {
    throw new Error('Environment variables are not set correctly');
}

client
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT);

const account = new Account(client);

const generateValidUserId = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-';
    let userId = '';
    for (let i = 0; i < 36; i++) {
        userId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return userId;
};

export const appwriteService = {
    // Register a new user
    register: async (email, password) => {
        try {
            console.log('Registering user with:', { email });

            // Validate inputs
            if (!email || !password) {
                throw new Error('Email and password are required.');
            }

            // Generate a valid userId
            const userId = generateValidUserId();

            // Create user
            const user = await account.create(
                userId,
                email,
                password
            );

            // If registration successful, create session
            if (user) {
                // Using the correct method for session creation
                await account.createSession(email, password);
                return user;
            }
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    },

    // Login a user
    login: async (email, password) => {
        try {
            console.log('Logging in user with:', { email });
            // Using the correct method for session creation
            const session = await account.createSession(email, password);
            return session;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    },

    // Login with Google OAuth
    loginWithGoogle: async () => {
        try {
            const session = await account.createOAuth2Session(
                'google',
                `${window.location.origin}/auth/callback`,
                `${window.location.origin}/auth/success`
            );
            return session;
        } catch (error) {
            console.error('Error logging in with Google:', error);
            throw error;
        }
    },

    // Logout a user
    logout: async () => {
        try {
            // Using deleteSessions to clean up all sessions
            await account.deleteSessions();
            return true;
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    },

    // Get current user
    getCurrentUser: async () => {
        try {
            return await account.get();
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    },

    // Check if user is logged in
    isLoggedIn: async () => {
        try {
            const user = await account.get();
            return Boolean(user);
        } catch {
            return false;
        }
    }
};
