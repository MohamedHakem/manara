// import RankingIcon from '@/components/icons/ranking';
// import RankingOutline from '@/components/icons/ranking-outline';
import { AnimatedHomeIcon } from '@/components/icons/animated-home-icon';
import { AnimatedUsersIcon } from '@/components/icons/animated-users-icon';
import { BicepsFlexed, Inbox, Medal, NotebookPen } from 'lucide-react';

export const sidebarMainNav = [
  {
    title: 'Home',
    url: '/',
    icon: AnimatedHomeIcon
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
    icon: AnimatedUsersIcon
  },
  {
    title: 'Leaderboard',
    url: '/leaderboard',
    icon: Medal
  },
  {
    title: 'Inbox',
    url: '/inbox',
    icon: Inbox
  },
];
