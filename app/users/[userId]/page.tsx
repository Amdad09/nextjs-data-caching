import Image from 'next/image';
import Link from 'next/link';
import { getUsers, type User } from '../page';

interface UserDetailsProps {
    params: Promise<{ userId: string }>;
}

export const generateStaticParams = async () => {
    // const users: User[] = await fetch('http://localhost:5000/users').then(
    //     (res) => res.json(),
    // );
    const users: User[] = await getUsers();
    const params = users.map((user) => ({
        userId: user.id.toString(),
    }));
    return params;
};

const UserDetails = async ({ params }: UserDetailsProps) => {
    const { userId } = await params;
    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        cache: 'no-store',
    });
    const user: User = await res.json();
    return (
        <main className="min-h-screen bg-[#0f1115] px-4 py-12 text-white">
            <div className="mx-auto max-w-4xl">
                {/* Back */}
                <Link
                    href="/users"
                    className="mb-8 inline-block text-sm text-gray-400 hover:text-white"
                >
                    ← Back to users
                </Link>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#181b21]">
                    {/* Header */}
                    <div className="h-40 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20" />

                    <div className="px-6 pb-8 md:px-10">
                        {/* Avatar */}
                        <div className="-mt-16">
                            <Image
                                src={user.avatar}
                                alt={user.name}
                                width={130}
                                height={130}
                                className="rounded-full border-4 border-[#181b21] object-cover"
                            />
                        </div>

                        {/* Name */}
                        <div className="mt-5">
                            <h1 className="text-4xl font-bold">{user.name}</h1>

                            <p className="mt-1 text-gray-500">
                                @{user.username}
                            </p>
                        </div>

                        {/* Role */}
                        <div className="mt-5">
                            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                                {user.role}
                            </span>
                        </div>

                        {/* Bio */}
                        <div className="mt-8">
                            <h2 className="text-lg font-semibold">About</h2>

                            <p className="mt-2 leading-7 text-gray-400">
                                {user.bio}
                            </p>
                        </div>

                        {/* Information */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl bg-black/20 p-5">
                                <p className="text-sm text-gray-500">Email</p>

                                <p className="mt-1 text-gray-200">
                                    {user.email}
                                </p>
                            </div>

                            <div className="rounded-xl bg-black/20 p-5">
                                <p className="text-sm text-gray-500">Phone</p>

                                <p className="mt-1 text-gray-200">
                                    {user.phone}
                                </p>
                            </div>

                            <div className="rounded-xl bg-black/20 p-5">
                                <p className="text-sm text-gray-500">Company</p>

                                <p className="mt-1 text-gray-200">
                                    {user.company}
                                </p>
                            </div>

                            <div className="rounded-xl bg-black/20 p-5">
                                <p className="text-sm text-gray-500">
                                    Location
                                </p>

                                <p className="mt-1 text-gray-200">
                                    {user.location}
                                </p>
                            </div>
                        </div>

                        {/* Website */}
                        <div className="mt-8">
                            <p className="text-sm text-gray-500">Website</p>

                            <a
                                href={`https://${user.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 inline-block text-blue-400 hover:underline"
                            >
                                {user.website}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UserDetails;
