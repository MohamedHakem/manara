import {
  BookText,
  Calendar,
  Chrome,
  Cloudy,
  Gift,
  GraduationCap,
  Headset,
  ListCollapse,
  Map,
  Send,
  TvMinimal
} from 'lucide-react';

export const sidebarSecondaryNav = [
  {
    title: 'Showcase',
    url: '/showcase',
    icon: TvMinimal
  },
  {
    title: 'Live Sessions',
    url: '/live-sessions',
    icon: Cloudy
  },
  {
    title: 'Upcoming Events',
    url: '/events',
    icon: Calendar
  },
  {
    title: 'Manara Extension',
    url: '/manara-extension',
    icon: Chrome
  },
  {
    title: 'Certifications',
    url: '/certifications',
    icon: GraduationCap
  },
  {
    title: 'Feedback',
    url: '/feedback',
    icon: Send
  },
  {
    title: 'Help',
    url: '/help',
    icon: Headset
  },
  {
    title: 'Roadmap',
    url: '/roadmap',
    icon: Map
  },
  {
    title: 'Referral',
    url: '/referral',
    icon: Gift
  },
  {
    title: 'Changelog',
    url: '/changelog',
    icon: ListCollapse
  },
  {
    title: 'Docs',
    url: '/docs',
    icon: BookText
  }
];
