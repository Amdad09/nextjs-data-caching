import type { PostCardProps } from "@/app/posts/page";
import Link from "next/link";

interface PostProps{
    post: PostCardProps;
}

const PostCard = ({ post }: PostProps) => {
    const { userId, id, title, body } = post;
    return (
        <article className="group w-full max-w-md rounded-2xl border border-white/10 bg-[#17181c] p-6 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl">
            {/* Top */}
            <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                    Post #{id}
                </span>

                <span className="text-xs text-gray-500">User ID: {userId}</span>
            </div>

            {/* Title */}
            <h2 className="mb-4 text-xl font-bold leading-7 text-white transition-colors duration-300 group-hover:text-blue-400">
                {title}
            </h2>

            {/* Body */}
            <p className="line-clamp-4 text-sm leading-6 text-gray-400">
                {body}
            </p>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs text-gray-500">Published Post</span>

                <Link href={`/posts/${id}`} className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 cursor-pointer hover:text-white">
                    Read More →
                </Link>
            </div>
        </article>
    );
};

export default PostCard;
