// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { PageTitle } from '@/components/PageTitle';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Client, Account } from 'appwrite';
// import { Modal } from '@/components/Modal';

// function AccountPage() {
//   const [email, setEmail] = useState('');
//   const [currentPasswordForEmail, setCurrentPasswordForEmail] = useState('');
//   const [currentPasswordForPassword, setCurrentPasswordForPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch('/api/user');
//         if (response.ok) {
//           const loggedInUser = await response.json();
//           setUser(loggedInUser);
//         } else {
//           router.push('/login');
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);
//         router.push('/login');
//       }
//     };
//     fetchUser();
//   }, [router]);

//   const client = new Client()
//     .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
//     .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

//   const account = new Account(client);

//   const handleChangeEmail = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError('');
//     setSuccess('');
//     try {
//       await account.updateEmail(email, currentPasswordForEmail);
//       setSuccess('Email updated successfully');
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   const handleChangePassword = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError('');
//     setSuccess('');
//     try {
//       await account.updatePassword(newPassword, currentPasswordForPassword);
//       setSuccess('Password updated successfully');
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   const handleDeleteAccount = async () => {
//     setError('');
//     setSuccess('');
//     try {
//       await account.deleteSession('current');
//       setUser(null);
//       router.push('/signup');
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   const confirmDelete = async () => {
//     closeModal();
//     await handleDeleteAccount();
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
//       <PageTitle className="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg text-center">Account</PageTitle>

//       <div className="bg-background p-4 md:p-8 rounded-lg">
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         {success && <p className="text-green-500 mb-4">{success}</p>}

//         <form onSubmit={handleChangeEmail} className="max-w-md mx-auto mb-8">
//           <h2 className="text-2xl mb-4">Change Email</h2>
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-2">New Email</label>
//             <Input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="currentPasswordForEmail" className="block mb-2">Current Password</label>
//             <Input
//               type="password"
//               id="currentPasswordForEmail"
//               value={currentPasswordForEmail}
//               onChange={(e) => setCurrentPasswordForEmail(e.target.value)}
//               required
//               className="w-full"
//             />
//           </div>
//           <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Change Email</Button>
//         </form>

//         <form onSubmit={handleChangePassword} className="max-w-md mx-auto mb-8">
//           <h2 className="text-2xl mb-4">Change Password</h2>
//           <div className="mb-4">
//             <label htmlFor="newPassword" className="block mb-2">New Password</label>
//             <Input
//               type="password"
//               id="newPassword"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//               className="w-full"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="currentPasswordForPassword" className="block mb-2">Current Password</label>
//             <Input
//               type="password"
//               id="currentPasswordForPassword"
//               value={currentPasswordForPassword}
//               onChange={(e) => setCurrentPasswordForPassword(e.target.value)}
//               required
//               className="w-full"
//             />
//           </div>
//           <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Change Password</Button>
//         </form>

//         <div className="max-w-md mx-auto">
//           <h2 className="text-2xl mb-4">Delete Account</h2>
//           <Button onClick={openModal} className="w-full bg-red-600 text-white hover:bg-red-700">Delete Account</Button>
//         </div>
//       </div>

//       <Modal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         onConfirm={confirmDelete}
//         title="Are you sure you want to delete this account?"
//       >
//         This action cannot be undone.
//       </Modal>
//     </div>
//   );
// };
// export default AccountPage;

export default function AccountPage() {
  return <div>Account</div>;
}