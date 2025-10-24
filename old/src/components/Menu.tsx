"use client";

// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ModeToggle } from "@/components/ModeToggle";
// import { Client, Account } from "appwrite";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { User } from 'lucide-react';
// import { useUser } from '@/contexts/UserContext';
// import { useEffect } from 'react';

export function Menu() {
  // const { user, setUser, fetchUser } = useUser();
  // const router = useRouter();

  // useEffect(() => {
  //   fetchUser();
  // }, [fetchUser]);

  // const handleLogout = async () => {
  //   try {
  //     const client = new Client()
  //       .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  //       .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

  //     const account = new Account(client);
  //     await account.deleteSession('current');
  //     // setUser(null);
  //     router.push('/login');
  //   } catch (error) {
  //     console.error('Logout failed', error);
  //   }
  // };

  return (
    <nav className="w-full bg-background">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex justify-between items-center p-4">
        <Link href="/" className="text-xl md:text-2xl font-serif font-light">
          System: You
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/resources" className="hover:underline">
              Resources
            </Link>
          </li>
          {/* <li>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User size={20} />
                    <span>{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/account">Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={handleLogout}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login" passHref>
                <Button variant="ghost">Log in</Button>
              </Link>
            )}
          </li> */}
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}