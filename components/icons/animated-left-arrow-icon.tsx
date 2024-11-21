'use client';

import type { Variants } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';

const pathVariants: Variants = {
  normal: { d: 'm12 19-7-7 7-7', translateX: 0 },
  animate: {
    d: 'm12 19-7-7 7-7',
    translateX: [0, 3, 0],
    transition: {
      duration: 0.4
    }
  }
};

// const secondPathVariants: Variants = {
//   normal: { d: 'M19 12H5' },
//   animate: {
//     d: ['M19 12H5', 'M19 12H10', 'M19 12H5'],
//     transition: {
//       duration: 0.4
//     }
//   }
// };

const AnimatedArrowLeftIcon = ({ color }: { color: string }) => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path d="m12 19-7-7 7-7" variants={pathVariants} animate={controls} />
        {/* <motion.path d="M19 12H5" variants={secondPathVariants} animate={controls} /> */}
      </svg>
    </div>
  );
};

export { AnimatedArrowLeftIcon };