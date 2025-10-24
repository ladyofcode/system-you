'use client'; // Add this at the top of the file

// import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';
// import { Client, Account } from 'appwrite';

// interface User {
//   name: string;
// }

// interface UserContextType {
//   user: User | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
//   fetchUser: () => Promise<void>;
//   login: (email: string, password: string) => Promise<void>;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // const [user, setUser] = useState<User | null>(null);

  // const client = useMemo(() => new Client()
  //   .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  //   .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!), []);

  // const account = useMemo(() => new Account(client), [client]);

  // const fetchUser = useCallback(async () => {
  //   try {
  //     const userData = await account.get();
  //     setUser({ name: userData.name });
  //   } catch (_error) {
  //     console.log('Error fetching user:', _error);
  //     setUser(null);
  //   }
  // }, [account]);

  // const login = useCallback(async (email: string, password: string) => {
  //   await account.createEmailPasswordSession(email, password);
  //   await fetchUser();
  // }, [account, fetchUser]);

  // useEffect(() => {
  //   fetchUser();
  // }, [fetchUser]);

  // const value = useMemo(() => ({ user, setUser, fetchUser, login }), [user, fetchUser, login]);

  return (
    // <UserContext.Provider value={value}>
    // <UserContext.Provider value={value}>
      {children}
    // </UserContext.Provider>
  );
};

export const useUser = () => {
  // const context = useContext(UserContext);
  // if (context === undefined) {
  //   throw new Error('useUser must be used within a UserProvider');
  // }
  // return context;
};