import { Briefcase, GraduationCap, MapPin, Home, Heart, Filter } from 'lucide-react';
import PostCard from '../components/Feed/PostCard';
import { sahasProfile } from '../data/profileData';
import Navbar from '../components/Navbar';

const Profile = () => {
  const { user, coverPhoto, profilePhoto, friendCount, mutualFriends, intro, photos, posts } = sahasProfile;

  return (
    <div className="min-h-screen bg-fb-gray">
      <Navbar />
      <div className="pt-14">
      {/* Cover Photo */}
      <div className="relative w-full h-80 bg-gray-300">
        <img
          src={coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        {/* Profile Picture Overlay */}
        <div className="absolute bottom-0 left-8 transform translate-y-1/2">
          <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white">
            <img
              src={profilePhoto}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="bg-white border-b border-gray-200 pb-4">
        <div className="max-w-6xl mx-auto px-4 pt-20">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-black mb-2">{user.name}</h1>
              <div className="flex items-center gap-4 text-sm text-black mb-3">
                <span>{friendCount} friends</span>
                <span>{mutualFriends} mutual</span>
              </div>
              {/* Mutual Friends Avatars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt="Mutual friend"
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-fb-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Respond
              </button>
              <button className="px-4 py-2 bg-fb-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Message
              </button>
              <button className="w-10 h-10 rounded-full bg-fb-gray hover:bg-gray-300 flex items-center justify-center">
                <span className="text-gray-700">▼</span>
              </button>
            </div>
          </div>
          {/* Friend Request Bar */}
          <div className="mt-4 p-3 bg-gray-100 rounded-lg flex items-center justify-between">
            <span className="text-sm text-black">Sahas sent you a friend request</span>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 bg-fb-blue text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                Confirm request
              </button>
            <button className="px-4 py-1.5 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors border border-gray-300">
              Delete Request
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-8">
            <button className="px-4 py-3 border-b-2 border-fb-blue text-fb-blue font-semibold">
              Posts
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              About
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              Friends
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              Photos
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              Check-ins
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              Sports
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              More ▾
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex gap-4">
        {/* Left Sidebar */}
        <div className="w-80 flex-shrink-0 space-y-4">
          {/* Intro Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-xl font-bold text-black mb-4">Intro</h2>
            <div className="space-y-3">
              {intro.work?.map((work, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Briefcase className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-black">{work}</span>
                </div>
              ))}
              {intro.education?.map((edu, i) => (
                <div key={i} className="flex items-start gap-2">
                  <GraduationCap className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-black">{edu}</span>
                </div>
              ))}
              {intro.location?.map((loc, i) => (
                <div key={i} className="flex items-start gap-2">
                  {i === 0 ? (
                    <Home className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm text-black">{loc}</span>
                </div>
              ))}
              {intro.relationship && (
                <div className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-black">{intro.relationship}</span>
                </div>
              )}
            </div>
          </div>

          {/* Photos Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-black">Photos</h2>
              <button className="text-sm text-fb-blue hover:underline">See All Photos</button>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {photos.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt={`Photo ${i + 1}`}
                  className="w-full aspect-square object-cover rounded cursor-pointer hover:opacity-90 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Posts Feed */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-black">Posts</h2>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-fb-gray rounded-lg hover:bg-gray-300 transition-colors">
                <Filter className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-semibold text-black">Filters</span>
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
