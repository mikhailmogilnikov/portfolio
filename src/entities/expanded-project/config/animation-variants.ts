export const ExpandedProjectSectionVariants = {
  enter: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      type: 'spring',
      damping: 26,
      stiffness: 300,
    },
    y: 0,
  },
};
