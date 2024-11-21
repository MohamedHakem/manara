'use client';

import { motion, useAnimation, type Variants } from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';

const pathVariants: Variants = {
  normal: {
    translateX: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 13
    }
  },
  animate: {
    translateX: [-6, 0],
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 200,
      damping: 13
    }
  }
};

const AnimatedUsersIcon = ({ iconColor, title, isExternal }: { iconColor?: string, title?: string, isExternal?: boolean }) => {
  console.log("🚀 ~ AnimatedUsersIcon ~ iconColor:", iconColor)
  const controls = useAnimation();

  return (
    <div
    className="cursor-pointer select-none py-[2px] px-2 flex w-full h-full items-center gap-3 rounded-md transition-colors duration-200"
    onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={iconColor || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <motion.path d="M22 21v-2a4 4 0 0 0-3-3.87" variants={pathVariants} animate={controls} />
        <motion.path d="M16 3.13a4 4 0 0 1 0 7.75" variants={pathVariants} animate={controls} />
      </svg>
      <span>{title}</span>
      {isExternal && (
        <div className="ml-auto">
          <SquareArrowOutUpRight size={12} color={iconColor} className="!h-3" />
        </div>
      )}
    </div>
  );
};

export { AnimatedUsersIcon };
