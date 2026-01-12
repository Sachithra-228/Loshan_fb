import { currentUser } from '../../data/mockData';
import { Image, Smile, MapPin } from 'lucide-react';

const Composer = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 bg-fb-gray rounded-full px-4 py-2 text-sm outline-none"
          aria-label="Create post"
        />
      </div>
      <div className="flex items-center justify-around pt-3 border-t border-gray-200">
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-fb-gray rounded-lg transition-colors text-sm text-fb-dark-gray font-medium">
          <Image className="w-5 h-5 text-green-500" />
          <span>Photo/video</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-fb-gray rounded-lg transition-colors text-sm text-fb-dark-gray font-medium">
          <Smile className="w-5 h-5 text-yellow-500" />
          <span>Feeling/activity</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-fb-gray rounded-lg transition-colors text-sm text-fb-dark-gray font-medium">
          <MapPin className="w-5 h-5 text-red-500" />
          <span>Check in</span>
        </button>
      </div>
    </div>
  );
};

export default Composer;
