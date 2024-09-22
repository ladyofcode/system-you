'use client';

import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Button } from "@/components/ui/button";

export default function AccountPage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    // Add more user details as needed
  });

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logout attempted');
  };

  return (
    <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
      <PageTitle className="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg text-center">Your Account</PageTitle>
      
      <div className="bg-background p-4 md:p-8 rounded-lg">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Welcome, {user.name}!</h2>
          <p className="mb-4">Email: {user.email}</p>
          
          {/* Add more user details or account management options here */}
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Account Actions</h3>
            <ul className="space-y-2">
              <li>
                <Button className="w-full text-left justify-start" variant="outline">
                  Edit Profile
                </Button>
              </li>
              <li>
                <Button className="w-full text-left justify-start" variant="outline">
                  Change Password
                </Button>
              </li>
              <li>
                <Button className="w-full text-left justify-start" variant="outline">
                  Notification Settings
                </Button>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <Button onClick={handleLogout} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}