import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div>
      <motion.div
        style={{
          scale,
          opacity,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;