import Composer from './Composer';
import StoriesRow from './StoriesRow';
import PostCard from './PostCard';
import { posts } from '../../data/mockData';

const Feed = () => {
  return (
    <div className="flex-1 max-w-2xl w-full px-4 pt-4 md:ml-64 xl:mr-80">
      <Composer />
      <StoriesRow />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
