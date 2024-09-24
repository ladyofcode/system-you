import { redirect } from "next/navigation";

import { PageTitle } from '@/components/PageTitle';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default async function LoginPage() {

  return (
    <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-8 md:py-12">
      <PageTitle className="text-4xl md:text-5xl mb-8 md:mb-12 p-4 md:p-6 bg-background rounded-lg text-center">Log in</PageTitle>
      
      {/* <div className="bg-background p-4 md:p-8 rounded-lg">
        <form method="post" className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">Password</label>
            <Input
              type="password"
              id="password"
              name="password"
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Log in</Button>
        </form>
        <div className="text-center mt-4">
          <Link href="/signup" className="text-sm hover:underline">No account? Sign up</Link>
        </div>
      </div> */}
    </div>
  );
}