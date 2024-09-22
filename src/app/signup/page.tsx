'use client';

import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement signup logic
    console.log('Signup attempted with:', email, password);
  };

  return (
    <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
      <PageTitle className="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg text-center">Sign up</PageTitle>
      
      <div className="bg-background p-4 md:p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">Password</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Sign up</Button>
        </form>
        <div className="text-center mt-4">
          <Link href="/login" className="text-sm hover:underline">Have an account? Log in</Link>
        </div>
      </div>
    </div>
  );
}