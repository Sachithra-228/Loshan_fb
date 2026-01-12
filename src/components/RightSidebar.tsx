import { X, Check, ExternalLink } from 'lucide-react';
import { sponsored, friendRequests } from '../data/mockData';
import { birthdays } from '../data/mockData';

const RightSidebar = () => {
  return (
    <aside className="fixed right-0 top-14 w-80 h-[calc(100vh-3.5rem)] overflow-y-auto bg-white pt-4 px-4">
      {/* Sponsored Section */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-fb-dark-gray mb-3">Sponsored</h3>
        {sponsored.map((ad) => (
          <div key={ad.id} className="mb-4 cursor-pointer hover:opacity-90 transition-opacity">
            <div className="rounded-lg overflow-hidden mb-2">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium mb-1">{ad.title}</p>
                <div className="flex items-center gap-1 text-xs text-fb-dark-gray">
                  <span>{ad.link}</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Friend Requests */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold text-fb-dark-gray">Friend requests</h3>
          <button className="text-xs text-fb-blue hover:underline">See all</button>
        </div>
        {friendRequests.map((request) => (
          <div key={request.id} className="mb-3">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={request.user.avatar}
                alt={request.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{request.user.name}</p>
                <p className="text-xs text-fb-dark-gray">
                  {request.mutualFriends} mutual friend{request.mutualFriends !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-fb-blue text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-1">
                <Check className="w-4 h-4" />
                Confirm
              </button>
              <button className="flex-1 bg-fb-gray text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-1">
                <X className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Birthdays */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold text-fb-dark-gray">Birthdays</h3>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🎂</span>
          <p className="text-sm">
            <span className="font-semibold">{birthdays[0]?.name}</span> and{' '}
            <span className="font-semibold">{birthdays[1]?.name}</span> have birthdays today.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
