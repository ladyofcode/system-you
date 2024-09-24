import { redirect } from 'next/navigation';
// import { getLoggedInUser } from '@/lib/server/appwrite';

export default async function Profile() {
    // const user = await getLoggedInUser();
    // console.log('Logged in user:', user);

    // if (!user) {
    //     console.log('No user found, redirecting to login...');
    //     redirect('/login');
    // }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            {/* <p className="text-lg">Welcome to your profile page, {user.name}!</p> */}
            {/* Add more profile-related content here */}
        </div>
    );
}
