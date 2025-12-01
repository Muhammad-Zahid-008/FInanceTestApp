import { WP, HP, platformOrientedCode } from '../responsive';

export const spacing = {
  // Pixel values
  none: 0,
  xs: WP('0.5%'), // ~2px
  sm: WP('1%'), // ~4px
  md: WP('2%'), // ~8px
  lg: WP('3%'), // ~12px
  xl: WP('4%'), // ~16px
  xxl: WP('6%'), // ~24px
  xxxl: WP('8%'), // ~32px

  // Percentage based
  screenPadding: WP('4%'),
  sectionPadding: WP('6%'),
  cardPadding: WP('3%'),
  buttonPadding: platformOrientedCode(HP('1.5%'), HP('1.2%')),

  // Component specific
  icon: WP('5%'),
  avatar: WP('12%'),
  thumbnail: WP('20%'),

  // Border radius
  borderRadius: {
    none: 0,
    sm: WP('1%'),
    md: WP('2%'),
    lg: WP('3%'),
    xl: WP('5%'),
    round: WP('50%'),
  },

  // Border width
  borderWidth: {
    none: 0,
    thin: 1,
    medium: 2,
    thick: 3,
  },
};

// Layout constants
export const layout = {
  headerHeight: platformOrientedCode(HP('7%'), HP('8%')),
  tabBarHeight: HP('8%'),
  bottomBarHeight: HP('10%'),
  buttonHeight: HP('6%'),
  inputHeight: HP('6%'),
};
