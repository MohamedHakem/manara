import { BookText, Calendar, Chrome, Cloudy, GraduationCap, Headset, Logs, Map, Send } from 'lucide-react';

export const sidebarSecondaryNav = [
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
    title: 'Changelog',
    url: '/changelog',
    icon: Logs
  },
  {
    title: 'Docs',
    url: '/docs',
    icon: BookText
  },
];
