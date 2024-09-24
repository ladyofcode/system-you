// import { getLoggedInUser } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { PageTitle } from '@/components/PageTitle'
import NewsletterForm from '@/components/NewsletterForm'

export default async function Home() {
  // const user = await getLoggedInUser();

  // if (user) redirect("/account");

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

        <NewsletterForm />
      </div>
    </div>
  )
}