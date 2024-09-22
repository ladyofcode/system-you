'use client';

import { PageTitle } from '@/components/PageTitle'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="bg-background p-16 rounded-lg w-full max-w-2xl">
        <PageTitle className="text-5xl md:text-7xl mb-8 text-center">System: You</PageTitle>
        <p className="mb-12 text-center max-w-md mx-auto text-xl">Build your best self.</p>
        
        <div className="mt-12 mb-6">
          <p className="text-lg text-center">
            Get a bite-sized topic in your inbox weekly through our newsletter
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex items-center justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="max-w-sm w-full mr-2"
            required
          />
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-dark">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  )
}

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  // TODO: Implement MailerLite integration here
  console.log("Form submitted")
}