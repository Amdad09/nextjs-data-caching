import Link from 'next/link';

interface PostDetailsPageProps {
    params: Promise<{ postId: number }>;
}
const PostDetailsPage = async ({ params }: PostDetailsPageProps) => {
    const { postId } = await params;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    const post = await res.json();
    if (!post) return <>Post not found</>;

    const { userId, id, title } = post;
    return (
        <>
            {post && (
                <main className="min-h-screen bg-[#0f1014] text-white">
                    <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-24">
                        {/* Breadcrumb / Meta */}
                        <div className="mb-10 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                            <span>Posts</span>
                            <span>/</span>
                            <span>Post #{id}</span>
                            <span className="mx-1 h-1 w-1 rounded-full bg-gray-600" />
                            <span>User {userId}</span>
                        </div>

                        {/* Title */}
                        <header className="max-w-5xl">
                            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                                Featured Post
                            </p>

                            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                                {title}
                            </h1>
                        </header>

                        {/* Divider */}
                        <div className="my-10 h-px w-full bg-white/10" />

                        {/* Article */}
                        <article className="max-w-4xl">
                            <p className="mb-8 text-lg leading-8 text-gray-400">
                                This post contains an interesting piece of
                                content shared by the author. Explore the
                                details below.
                            </p>
                            {/* <div className="space-y-7 text-lg leading-9 text-gray-300">
                                {body.split('.').map((paragraph, index) => (
                                    <p key={index}>{paragraph.trim()}.</p>
                                ))}
                            </div> */}
                        </article>

                        {/* Post Information */}
                        <section className="mt-16 border-y border-white/10 py-8">
                            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                                <div>
                                    <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                                        Post ID
                                    </p>
                                    <p className="text-lg font-semibold text-white">
                                        #{id}
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                                        Author ID
                                    </p>
                                    <p className="text-lg font-semibold text-white">
                                        User {userId}
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                                        Category
                                    </p>
                                    <p className="text-lg font-semibold text-white">
                                        General
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-gray-500">
                                Thanks for reading this post.
                            </p>

                            <Link
                                href="/posts"
                                className="w-fit rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                            >
                                ← Back to Posts
                            </Link>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
};

export default PostDetailsPage;
