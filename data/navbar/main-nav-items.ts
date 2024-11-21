// import RankingIcon from '@/components/icons/ranking';
// import RankingOutline from '@/components/icons/ranking-outline';
import { BicepsFlexed, Home, Inbox, Medal, NotebookPen, Users } from 'lucide-react';

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
    icon: Medal
    // icon: RankingOutline
  },
  {
    title: 'Inbox',
    url: '/inbox',
    icon: Inbox
  },
];
