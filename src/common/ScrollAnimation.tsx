import React, { ReactNode } from 'react';
import { motion, useInView, MotionStyle } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  startScale?: number;
  endScale?: number;
  startOpacity?: number;
  endOpacity?: number;
  duration?: number;
  delay?: number;
  customStyle?: MotionStyle;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  startScale = 0.7,
  endScale = 1,
  startOpacity = 0,
  endOpacity = 1,
  duration = 0.2,
  delay = 0,
  customStyle = {},
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1, // How much of the element should be in view
    margin: "0px 0px -100px 0px" // Negative margin to trigger animation slightly before element comes into view
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        scale: startScale,
        opacity: startOpacity
      }}
      animate={{
        scale: isInView ? endScale : startScale,
        opacity: isInView ? endOpacity : startOpacity
      }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
      style={customStyle}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;