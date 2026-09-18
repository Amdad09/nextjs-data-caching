import PostCard from '@/components/PostCard';
export interface PostCardProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}
const PostsPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 3600
        }
    });
    const data: PostCardProps[] = await res.json();
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-12'>
            {data.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostsPage;
