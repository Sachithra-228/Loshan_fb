import { Story, Post, MenuItem, Shortcut, Sponsored, FriendRequest } from '../types';

export const currentUser = {
  id: '1',
  name: 'Nikini Weerasinghe',
  avatar: 'https://i.pravatar.cc/150?img=57',
};

export const stories: Story[] = [
  { id: '1', user: { id: '2', name: 'Alice Smith', avatar: 'https://i.pravatar.cc/150?img=47' }, image: 'https://picsum.photos/400/600?random=1' },
  { id: '2', user: { id: '3', name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=48' }, image: 'https://picsum.photos/400/600?random=2' },
  { id: '3', user: { id: '4', name: 'Emma White', avatar: 'https://i.pravatar.cc/150?img=49' }, image: 'https://picsum.photos/400/600?random=3' },
  { id: '4', user: { id: '5', name: 'Olivia Brown', avatar: 'https://i.pravatar.cc/150?img=50' }, image: 'https://picsum.photos/400/600?random=4' },
  { id: '5', user: { id: '6', name: 'Sophia Davis', avatar: 'https://i.pravatar.cc/150?img=51' }, image: 'https://picsum.photos/400/600?random=5' },
];

export const posts: Post[] = [
  {
    id: '1',
    user: { id: '2', name: 'Alice Smith', avatar: 'https://i.pravatar.cc/150?img=47' },
    time: '2h',
    caption: 'Beautiful sunset today! 🌅',
    image: 'https://picsum.photos/800/600?random=10',
    likes: 245,
    comments: 32,
  },
  {
    id: '2',
    user: { id: '3', name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=48' },
    time: '5h',
    caption: 'Just finished reading an amazing book. Highly recommend!',
    image: 'https://picsum.photos/800/600?random=11',
    likes: 189,
    comments: 15,
  },
  {
    id: '3',
    user: { id: '4', name: 'Emma White', avatar: 'https://i.pravatar.cc/150?img=49' },
    time: '1d',
    caption: 'Weekend vibes ✨',
    image: 'https://picsum.photos/800/600?random=12',
    likes: 312,
    comments: 48,
  },
];

export const menuItems: MenuItem[] = [
  { id: '1', label: 'Meta AI', icon: 'sparkles' },
  { id: '2', label: 'Friends', icon: 'users' },
  { id: '3', label: 'Professional dashboard', icon: 'briefcase' },
  { id: '4', label: 'Memories', icon: 'clock' },
  { id: '5', label: 'Saved', icon: 'bookmark' },
  { id: '6', label: 'Groups', icon: 'users-round' },
  { id: '7', label: 'Reels', icon: 'video' },
  { id: '8', label: 'See more', icon: 'chevron-down' },
];

export const shortcuts: Shortcut[] = [
  { id: '1', name: 'Tech News', image: 'https://picsum.photos/40/40?random=20' },
  { id: '2', name: 'Photography', image: 'https://picsum.photos/40/40?random=21' },
];

export const sponsored: Sponsored[] = [
  {
    id: '1',
    title: 'Learn Web Development',
    image: 'https://picsum.photos/300/200?random=30',
    link: 'example.com',
  },
  {
    id: '2',
    title: 'Premium Coffee Subscription',
    image: 'https://picsum.photos/300/200?random=31',
    link: 'coffee.com',
  },
];

export const friendRequests: FriendRequest[] = [
  {
    id: '1',
    user: { id: '7', name: 'Sarah Wilson', avatar: 'https://i.pravatar.cc/150?img=52' },
    mutualFriends: 5,
  },
];

export interface Notification {
  id: string;
  user?: User;
  type: 'birthday' | 'group' | 'poke' | 'event' | 'invitation' | 'friend_request';
  text: string;
  time: string;
  icon?: string;
  isUnread: boolean;
}

export const notifications: Notification[] = [
  {
    id: '1',
    user: { id: '8', name: 'Supun Kumarasiri', avatar: 'https://i.pravatar.cc/150?img=53' },
    type: 'birthday',
    text: 'Supun Kumarasiri and 14 others have birthdays today. Send them good thoughts!',
    time: '14h',
    isUnread: true,
  },
  {
    id: '2',
    user: { id: '9', name: 'Ankesh Rathod', avatar: 'https://i.pravatar.cc/150?img=54' },
    type: 'group',
    text: 'Ankesh Rathod and Mc Dæxy posted in likes for likes facebook.',
    time: '14h',
    isUnread: true,
  },
  {
    id: '3',
    user: { id: '10', name: 'Eshan Harshana', avatar: 'https://i.pravatar.cc/150?img=55' },
    type: 'poke',
    text: 'Eshan Harshana poked you.',
    time: '12h',
    isUnread: true,
  },
  {
    id: '4',
    user: { id: '11', name: 'Sahas Edirisinghe', avatar: 'https://i.pravatar.cc/150?img=56' },
    type: 'friend_request',
    text: 'Sahas Edirisinghe sent you a friend request.',
    time: '2 years ago',
    isUnread: true,
  },
];

export const birthdays = [
  { id: '1', name: 'Mike Taylor' },
  { id: '2', name: 'Lisa Anderson' },
];
