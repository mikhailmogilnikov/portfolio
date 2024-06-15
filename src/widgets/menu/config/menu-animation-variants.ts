export const LightThemeMenuVariant = {
  scale: 10,
  opacity: 0.7,
  y: -100,
  filter: 'blur(10px)',
  backgroundColor: '#ffffff',
  transition: { duration: 0.3 },
} as const;

export const DarkThemeMenuVariant = {
  scale: 10,
  opacity: 0.9,
  y: -100,
  filter: 'blur(10px)',
  backgroundColor: 'rgba(0, 0, 0)',
  transition: { duration: 0.3 },
} as const;

export const MenuCaretVariants = {
  static: {
    rotate: 0,
  },
  expand: {
    rotate: 180,
  },
};

export const MenuListVariants = {
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
  },
  hidden: {
    filter: 'blur(10px)',
    opacity: 0,
  },
};
