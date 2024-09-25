'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Client, Account } from "appwrite";
import { Button } from "@/components/ui/button";

export function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const client = new Client()
          .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
          .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
        
        const account = new Account(client);
        await account.get();
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Session check failed', error);
        setIsLoggedIn(false);
      }
    };

    checkSession();
  }, []);

  const handleLogout = async () => {
    try {
      const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
      
      const account = new Account(client);
      await account.deleteSession('current');
      setIsLoggedIn(false);
      router.push('/');
    } catch {
    // You can add error handling here if needed
    }
  };

  if (isLoggedIn) {
    return (
      <Button onClick={handleLogout} variant="ghost">
        Log out
      </Button>
    );
  }

  return (
    <Link href="/login" passHref>
      <Button variant="ghost">Log in</Button>
    </Link>
  );
}