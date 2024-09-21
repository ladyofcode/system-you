'use client';

import { PageTitle } from '@/components/PageTitle'
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="bg-background p-16 rounded-lg w-full max-w-2xl">
        <PageTitle className="text-5xl md:text-7xl mb-8 text-center">System: You</PageTitle>
        <p className="mb-8 text-center max-w-md mx-auto">Build your best self.</p>
        <Input
          type="email"
          placeholder="Enter your email to join the waitlist"
          className="max-w-sm w-full mx-auto"
        />
      </div>
    </div>
  )
}