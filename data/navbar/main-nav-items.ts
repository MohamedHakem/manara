import { BicepsFlexed, Home, NotebookPen, Users } from 'lucide-react';

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
    url: '#',
    icon: BicepsFlexed
  },
  {
    title: 'Connect',
    url: 'https://thisismanara.circle.so',
    itemType: 'external',
    icon: Users
  }
];
