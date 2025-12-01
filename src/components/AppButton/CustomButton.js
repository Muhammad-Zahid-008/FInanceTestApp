// components/CustomButton.js
import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { colors, fontFamily, fontSize, HP, WP } from '../../utils';

const CustomButton = ({
  // Button props
  title,
  onPress,
  onLongPress,
  disabled = false,
  loading = false,

  // Style props
  containerStyle,
  buttonStyle,
  textStyle,
  disabledStyle,
  loadingStyle,

  // Size variants
  size = 'medium',

  // Variant props
  variant = 'primary',

  // Icon props
  leftIcon,
  rightIcon,
  iconStyle,

  // Loading props
  loadingText,
  loadingColor = '#FFFFFF',

  // Other props
  testID,
  accessibilityLabel,
  accessibilityRole = 'button',
}) => {
  const getButtonSize = () => {
    switch (size) {
      case 'small':
        return styles.buttonSmall;
      case 'large':
        return styles.buttonLarge;
      default:
        return styles.buttonMedium;
    }
  };

  const getButtonVariant = () => {
    switch (variant) {
      case 'secondary':
        return styles.buttonSecondary;
      case 'outline':
        return styles.buttonOutline;
      case 'text':
        return styles.buttonText;
      default:
        return styles.buttonPrimary;
    }
  };

  const getTextVariant = () => {
    switch (variant) {
      case 'secondary':
        return styles.textSecondary;
      case 'outline':
        return styles.textOutline;
      case 'text':
        return styles.textText;
      default:
        return styles.textPrimary;
    }
  };

  const getDisabledVariant = () => {
    switch (variant) {
      case 'outline':
        return styles.buttonOutlineDisabled;
      case 'text':
        return styles.buttonTextDisabled;
      default:
        return styles.buttonPrimaryDisabled;
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[
          styles.button,
          getButtonSize(),
          getButtonVariant(),
          disabled && getDisabledVariant(),
          loading && styles.buttonLoading,
          buttonStyle,
          disabled && disabledStyle,
          loading && loadingStyle,
        ]}
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled || loading}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole={accessibilityRole}
      >
        {leftIcon ? (
          <Image
            source={leftIcon}
            style={styles.leftIcon}
            resizeMode="contain"
          />
        ) : (
          <View />
        )}

        {loading && (
          <ActivityIndicator
            size="small"
            color={loadingColor}
            style={styles.loadingIndicator}
          />
        )}

        <Text
          style={[
            styles.text,
            getTextVariant(),
            disabled && styles.textDisabled,
            textStyle,
          ]}
          numberOfLines={1}
        >
          {loading && loadingText ? loadingText : title}
        </Text>

        {rightIcon ? (
          <Image
            source={rightIcon}
            style={styles.rightIcon}
            resizeMode="contain"
          />
        ) : (
          <View />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonSmall: {
    height: HP(6),
  },
  buttonMedium: {
    height: HP(6),
  },
  buttonLarge: {
    height: HP(6),
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: '#25537bff',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#2E8B57',
    shadowOpacity: 0.1,
    elevation: 2,
  },
  buttonText: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonPrimaryDisabled: {
    backgroundColor: '#9CA3AF',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonOutlineDisabled: {
    borderColor: '#9CA3AF',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonTextDisabled: {
    opacity: 0.5,
  },
  buttonLoading: {
    opacity: 0.8,
  },
  text: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.Inter_Medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textPrimary: {
    color: '#FFFFFF',
  },
  textSecondary: {
    color: '#FFFFFF',
  },
  textOutline: {
    color: '#2E8B57',
  },
  textText: {
    color: '#2E8B57',
  },
  textDisabled: {
    color: '#FFFFFF',
  },
  leftIcon: {
    marginLeft: WP(2),
    width: WP(6),
    height: HP(4),
  },
  rightIcon: {
    marginRight: WP(2),
    width: WP(6),
    height: HP(4),
  },
  loadingIndicator: {
    marginRight: WP(2),
  },
});

export { CustomButton };
