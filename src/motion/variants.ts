import { Variants } from 'framer-motion';

export const slideUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeScale: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

export const springRotate: Variants = {
  hidden: { rotate: -10, opacity: 0 },
  visible: { 
    rotate: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

export const transitions = {
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 20
  },
  smooth: {
    type: "tween",
    ease: [0.22, 1, 0.36, 1],
    duration: 0.3
  }
};
