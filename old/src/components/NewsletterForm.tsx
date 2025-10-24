'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement MailerLite integration here
    console.log("Form submitted with email:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <Input
        type="email"
        placeholder="Enter your email"
        className="max-w-sm w-full mr-2"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-dark">
        Sign up
      </Button>
    </form>
  );
}