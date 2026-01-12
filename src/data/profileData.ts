import { Post, User } from '../types';

export const sahasProfile: {
  user: User;
  coverPhoto: string;
  profilePhoto: string;
  friendCount: string;
  mutualFriends: number;
  intro: {
    work?: string[];
    education?: string[];
    location?: string[];
    relationship?: string;
  };
  photos: string[];
  posts: Post[];
} = {
  user: {
    id: '11',
    name: 'Sahas Edirisinghe',
    avatar: 'https://i.pravatar.cc/150?img=56',
  },
  coverPhoto: 'https://picsum.photos/1200/400?random=100',
  profilePhoto: 'https://i.pravatar.cc/400?img=56',
  friendCount: '1.9K',
  mutualFriends: 40,
  intro: {
    work: [
      'Plumber at Galadari Hotel, Colombo',
      'Works at KFC',
      'Works at Singer Sri Lanka PLC',
    ],
    education: [
      'Studied at Technical College, Maradana, Colombo, Sri Lanka',
      'Went to Kottawa Dharmapala Maha Vidyalaya',
    ],
    location: [
      'Lives in Maharagama',
      'From Maharagama, Sri Lanka',
    ],
    relationship: 'Married to Sachini Maheesha',
  },
  photos: [
    'https://picsum.photos/200/200?random=201',
    'https://picsum.photos/200/200?random=202',
    'https://picsum.photos/200/200?random=203',
    'https://picsum.photos/200/200?random=204',
    'https://picsum.photos/200/200?random=205',
    'https://picsum.photos/200/200?random=206',
  ],
  posts: [
    {
      id: 'p1',
      user: { id: '11', name: 'Sahas Edirisinghe', avatar: 'https://i.pravatar.cc/150?img=56' },
      time: '6d',
      caption: '🎵🎶 Loving this new track! #music #vibes',
      image: 'https://picsum.photos/800/600?random=301',
      likes: 234,
      comments: 45,
    },
    {
      id: 'p2',
      user: { id: '11', name: 'Sahas Edirisinghe', avatar: 'https://i.pravatar.cc/150?img=56' },
      time: '1w',
      caption: '🎸🎹 Great music session today! #guitar #piano',
      image: 'https://picsum.photos/800/600?random=302',
      likes: 189,
      comments: 32,
    },
    {
      id: 'p3',
      user: { id: '11', name: 'Sahas Edirisinghe', avatar: 'https://i.pravatar.cc/150?img=56' },
      time: '2w',
      caption: '🎤🎧 New playlist dropped! Check it out #spotify #music',
      image: 'https://picsum.photos/800/600?random=303',
      likes: 312,
      comments: 67,
    },
    {
      id: 'p4',
      user: { id: '11', name: 'Sahas Edirisinghe', avatar: 'https://i.pravatar.cc/150?img=56' },
      time: '3w',
      caption: '💍❤️ Married to Sachini Maheesha',
      image: 'https://picsum.photos/800/600?random=304',
      likes: 1250,
      comments: 89,
    },
  ],
};
