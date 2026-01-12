import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Post } from '../../types';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{post.user.name}</p>
            <p className="text-xs text-fb-dark-gray">{post.time}</p>
          </div>
        </div>
        <button
          className="w-9 h-9 rounded-full hover:bg-fb-gray flex items-center justify-center transition-colors"
          aria-label="More options"
        >
          <MoreHorizontal className="w-5 h-5 text-fb-dark-gray" />
        </button>
      </div>

      {/* Caption */}
      <p className="text-sm mb-3">{post.caption}</p>

      {/* Image */}
      <div className="rounded-lg overflow-hidden mb-3">
        <img
          src={post.image}
          alt={post.caption}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-xs text-fb-dark-gray mb-2 pb-2 border-b border-gray-200">
        <div className="flex items-center gap-1">
          <ThumbsUp className="w-4 h-4 text-fb-blue" />
          <span>{post.likes}</span>
        </div>
        <div>
          <span>{post.comments} comments</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-around pt-2">
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-fb-gray rounded-lg transition-colors text-sm text-fb-dark-gray font-medium flex-1 justify-center">
          <ThumbsUp className="w-5 h-5" />
          <span>Like</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-fb-gray rounded-lg transition-colors text-sm text-fb-dark-gray font-medium flex-1 justify-center">
          <MessageCircle className="w-5 h-5" />
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-fb-gray rounded-lg transition-colors text-sm text-fb-dark-gray font-medium flex-1 justify-center">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
