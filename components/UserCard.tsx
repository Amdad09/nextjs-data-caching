import type { User } from '@/app/users/page';
import Image from 'next/image';
import Link from 'next/link';

interface UserCardProps {
    user: User;
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className="group rounded-2xl border border-white/10 bg-[#181b21] p-6 transition hover:-translate-y-1 hover:border-white/20">
            {/* Avatar */}
            <div className="flex items-center gap-4">
                <Image
                    src={user.avatar}
                    alt={user.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover"
                />

                <div>
                    <h2 className="text-xl font-semibold text-white">
                        {user.name}
                    </h2>

                    <p className="text-sm text-gray-500">@{user.username}</p>
                </div>
            </div>

            {/* Role */}
            <div className="mt-5">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    {user.role}
                </span>
            </div>

            {/* Info */}
            <div className="mt-5 space-y-2 text-sm text-gray-400">
                <p>✉ {user.email}</p>
                <p>📍 {user.location}</p>
                <p>🏢 {user.company}</p>
            </div>

            {/* Button */}
            <Link
                href={`/users/${user.id}`}
                className="mt-6 block rounded-xl bg-white py-3 text-center font-semibold text-black transition hover:bg-gray-200"
            >
                View Profile
            </Link>
        </div>
    );
};

export default UserCard;
