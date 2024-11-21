import { BicepsFlexed, Home, NotebookPen, Trophy, Users } from 'lucide-react';

export const sidebarMainNav = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Learn',
    url: '/learn',
    icon: NotebookPen
  },
  {
    title: 'Practice',
    url: '/practice',
    icon: BicepsFlexed
  },
  {
    title: 'Connect',
    url: 'https://thisismanara.circle.so',
    itemType: 'external',
    icon: Users
  },
  {
    title: 'Leaderboard',
    url: '/leaderboard',
    icon: Trophy
  },
];
