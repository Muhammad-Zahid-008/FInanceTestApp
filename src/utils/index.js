// Responsive utilities
export * from './responsive';

// Helper functions
export * from './helpers';

// Validation functions
export * from './validators';

// Storage utilities
export { default as storage } from './storage';
export { STORAGE_KEYS } from './storage';

// Individual exports for specific imports
export {
  WP,
  HP,
  RF,
  scrWidth,
  scrHeight,
  platformOrientedCode,
  scale,
  fontScale,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
  isLandscape,
  isIOS,
  isAndroid,
  statusBarHeight,
} from './responsive';

export {
  debounce,
  throttle,
  formatDate,
  capitalize,
  capitalizeWords,
  generateId,
  isEmpty,
  deepClone,
  safeJSONParse,
  openURL,
  formatFileSize,
  delay,
  randomInRange,
  getResponsiveWidth,
  getResponsiveHeight,
  getResponsiveFontSize,
} from './helpers';

export {
  validateEmail,
  validatePassword,
  validateStrongPassword,
  validatePhone,
  validateName,
  validateRequired,
  validateURL,
  validateNumber,
  validateCreditCard,
  validateDate,
  validateMinLength,
  validateMaxLength,
  validateRange,
  validateMatch,
} from './validators';

// Individual exports
export { colors } from './constants/colors';
export { fontFamily, fontSize } from './constants/size';
export { spacing, layout } from './constants/spacing';
export { appIcons, appImages } from './constants/assets';

// Validations

export * from './validationSchemas';
