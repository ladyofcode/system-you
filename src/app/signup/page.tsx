// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { PageTitle } from '@/components/PageTitle';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Link from 'next/link';
// import { Client, Account, ID } from "appwrite";

// export default function SignUpPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError('');
//     try {
//       const client = new Client()
//         .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
//         .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

//       const account = new Account(client);
//       await account.create(ID.unique(), email, password, name);
//       await account.createEmailPasswordSession(email, password);

//       router.push('/account');
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-start min-h-screen px-4 py-8 pt-20">
//       <div className="w-full max-w-md">
//         <PageTitle className="text-4xl md:text-5xl mb-8 p-4 md:p-6 bg-background rounded-lg text-center">Sign up</PageTitle>

//         {/* <div className="bg-background p-6 md:p-8 rounded-lg">
//           <form onSubmit={handleSubmit}>
//             {error && <p className="text-red-500 mb-4">{error}</p>}
//             <Input
//               id="email"
//               name="email"
//               placeholder="Email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mb-4"
//               required
//             />
//             <Input
//               id="password"
//               name="password"
//               placeholder="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               minLength={8}
//               className="mb-4"
//               required
//             />
//             <Input
//               id="name"
//               className="mb-4"
//               required
//             />
//             <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
//               Sign up
//             </Button>
//           </form>
//           <div className="text-center mt-4">
//             <Link href="/login" className="text-sm hover:underline">Have an account? Log in</Link>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }       name="name"
//               placeholder="Name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}


export default function SignupPage() {
  return <div>Signup</div>;
}