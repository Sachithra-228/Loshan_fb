import { Plus } from 'lucide-react';
import { stories } from '../../data/mockData';

const StoriesRow = () => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
      {/* Create Story Card */}
      <div className="flex-shrink-0 w-32 h-48 rounded-lg overflow-hidden relative bg-white shadow-sm cursor-pointer group">
        <div className="h-3/4 bg-gradient-to-br from-gray-200 to-gray-300"></div>
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-10 h-10 rounded-full bg-fb-blue flex items-center justify-center border-4 border-white">
            <Plus className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-2 text-center">
          <p className="text-xs font-semibold">Create story</p>
        </div>
      </div>

      {/* Story Cards */}
      {stories.map((story) => (
        <div
          key={story.id}
          className="flex-shrink-0 w-32 h-48 rounded-lg overflow-hidden relative shadow-sm cursor-pointer group"
        >
          <img
            src={story.image}
            alt={story.user.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute top-2 left-2">
            <div className="w-10 h-10 rounded-full border-4 border-fb-blue p-0.5 bg-white">
              <img
                src={story.user.avatar}
                alt={story.user.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
            <p className="text-white text-xs font-semibold truncate">{story.user.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoriesRow;
