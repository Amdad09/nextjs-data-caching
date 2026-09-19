import UserCard from '@/components/UserCard';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: string;
    role: string;
    location: string;
    bio: string;
    avatar: string;
}

export const getUsers = async () => {
    const res = await fetch('http://localhost:5000/users', {cache: 'no-store'});
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
};


const UsersPage = async () => {
    const users: User[] = await getUsers();
    return (
        <main className="min-h-screen bg-[#0f1115] px-4 py-12 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10">
                    <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
                        Community
                    </p>

                    <h1 className="mt-2 text-4xl font-bold">Our Users</h1>

                    <p className="mt-3 text-gray-400">
                        Meet the people in our community.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default UsersPage;
