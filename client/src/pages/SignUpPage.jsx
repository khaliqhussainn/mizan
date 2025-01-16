// import { Account, Client } from 'appwrite';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Initialize Appwrite client
// const client = new Client()
//   .setEndpoint('YOUR_APPWRITE_ENDPOINT')
//   .setProject('YOUR_PROJECT_ID');

// const account = new Account(client);

// interface SignInProps {
//   onSuccess?: () => void;
//   onError?: (error: string) => void;
// }

// export const useSignIn = ({ onSuccess, onError }: SignInProps = {}) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleSignIn = async (email: string, password: string) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Create email session
//       const session = await account.createEmailSession(email, password);

//       // Get user details after successful sign-in
//       const user = await account.get();

//       // Call success callback if provided
//       if (onSuccess) {
//         onSuccess();
//       }

//       // Navigate to home page after successful sign-in
//       navigate('/');

//       return { session, user };

//     } catch (error: any) {
//       // Handle specific error cases
//       let errorMessage = 'Sign-in failed. Please try again.';

//       if (error?.type === 'user_invalid_credentials') {
//         errorMessage = 'Invalid email or password';
//       } else if (error?.type === 'user_not_found') {
//         errorMessage = 'No account found with this email';
//       } else if (error?.code === 429) {
//         errorMessage = 'Too many attempts. Please try again later';
//       }

//       setError(errorMessage);
      
//       // Call error callback if provided
//       if (onError) {
//         onError(errorMessage);
//       }

//       throw new Error(errorMessage);

//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     signIn: handleSignIn,
//     isLoading,
//     error
//   };
// };

// // Example usage in a component:
// const SignInComponent = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const { signIn, isLoading, error } = useSignIn({
//     onSuccess: () => {
//       console.log('Successfully signed in!');
//     },
//     onError: (error) => {
//       console.error('Sign-in error:', error);
//     }
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signIn(email, password);
//     } catch (error) {
//       // Error is already handled by the hook
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit" disabled={isLoading}>
//         {isLoading ? 'Signing in...' : 'Sign In'}
//       </button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   );
// };