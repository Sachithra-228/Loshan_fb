import { useState } from 'react';
import { Search, Home, Users, Video, Store, Gamepad2, Menu, MessageCircle, Bell, Grid3x3, ChevronDown } from 'lucide-react';
import { currentUser } from '../data/mockData';
import NotificationsDropdown from './NotificationsDropdown';

interface NavbarProps {
  onFriendRequestClick?: (userName: string, userAvatar: string, time: string) => void;
}

const Navbar = ({ onFriendRequestClick }: NavbarProps) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50 flex items-center px-4">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Left: Logo + Search */}
        <div className="flex items-center gap-2 flex-1">
          <div className="w-10 h-10 rounded-full bg-fb-blue flex items-center justify-center cursor-pointer">
            <span className="text-white font-bold text-xl">f</span>
          </div>
          <div className="hidden md:flex items-center bg-fb-gray rounded-full px-4 py-2 gap-2 flex-1 max-w-xs">
            <Search className="w-5 h-5 text-fb-dark-gray" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="bg-transparent border-none outline-none flex-1 text-sm"
              aria-label="Search Facebook"
            />
          </div>
        </div>

        {/* Center: Navigation Icons */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          <button
            className="px-8 lg:px-12 py-2 hover:bg-fb-gray rounded-lg transition-colors relative"
            aria-label="Home"
          >
            <Home className="w-6 h-6 text-fb-blue" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-fb-blue rounded-t-full"></div>
          </button>
          <button
            className="px-8 lg:px-12 py-2 hover:bg-fb-gray rounded-lg transition-colors"
            aria-label="Friends"
          >
            <Users className="w-6 h-6 text-fb-dark-gray" />
          </button>
          <button
            className="px-8 lg:px-12 py-2 hover:bg-fb-gray rounded-lg transition-colors"
            aria-label="Watch"
          >
            <Video className="w-6 h-6 text-fb-dark-gray" />
          </button>
          <button
            className="px-8 lg:px-12 py-2 hover:bg-fb-gray rounded-lg transition-colors"
            aria-label="Marketplace"
          >
            <Store className="w-6 h-6 text-fb-dark-gray" />
          </button>
          <button
            className="px-8 lg:px-12 py-2 hover:bg-fb-gray rounded-lg transition-colors"
            aria-label="Gaming"
          >
            <Gamepad2 className="w-6 h-6 text-fb-dark-gray" />
          </button>
        </div>

        {/* Right: Icons + Profile */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <button
            className="w-10 h-10 rounded-full bg-fb-gray hover:bg-gray-300 flex items-center justify-center transition-colors"
            aria-label="Menu"
          >
            <Grid3x3 className="w-5 h-5 text-gray-700" />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-fb-gray hover:bg-gray-300 flex items-center justify-center transition-colors"
            aria-label="Messenger"
          >
            <MessageCircle className="w-5 h-5 text-gray-700" />
          </button>
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-10 h-10 rounded-full bg-fb-gray hover:bg-gray-300 flex items-center justify-center transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <NotificationsDropdown
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
              onFriendRequestClick={onFriendRequestClick}
            />
          </div>
          <button
            className="w-10 h-10 rounded-full overflow-hidden hover:opacity-90 transition-opacity flex items-center justify-center"
            aria-label="Profile"
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
