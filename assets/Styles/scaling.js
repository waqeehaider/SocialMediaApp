import { Dimensions } from 'react-native';

// Get device window dimensions
const { width, height } = Dimensions.get('window');

// Helper flag for small screens
const isSmall = width <= 375;

const guidlineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const guidlineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const guidlineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const horizontalScale = size => (width / guidlineBaseWidth()) * size;
const verticleScale = size => (height / guidlineBaseHeight()) * size;
const scaleFontSize = size => Math.round(width / guidlineBaseFonts()) * size;

export { horizontalScale, verticleScale, scaleFontSize };
