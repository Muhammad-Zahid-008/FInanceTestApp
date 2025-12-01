// components/CustomInput.js
import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { fontFamily, fontSize, HP, WP } from '../../utils';

const CustomInput = ({
  // Input props
  value,
  onChangeText,
  placeholder,
  placeholderTextColor = '#9CA3AF',
  keyboardType = 'default',
  autoCapitalize = 'none',
  secureTextEntry = false,
  editable = true,
  multiline = false,
  maxLength,
  autoFocus = false,

  // Style props
  containerStyle,
  inputStyle,
  errorStyle,

  // Icon props
  leftIcon,
  rightIcon,
  onRightIconPress,
  onLeftIconPress,
  leftIconStyle,
  rightIconStyle,

  label,
  labelStyle,
  error,
  errorMessage,
  showError = true,

  testID,
  accessibilityLabel,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <View
        style={[
          styles.inputContainer,
          error && styles.inputContainerError,
          !editable && styles.inputContainerDisabled,
        ]}
      >
        {leftIcon && (
          <TouchableOpacity
            onPress={onLeftIconPress}
            disabled={!onLeftIconPress}
            style={[styles.leftIconContainer, leftIconStyle]}
          >
            {leftIcon}
          </TouchableOpacity>
        )}

        <TextInput
          style={[
            styles.input,
            leftIcon && styles.inputWithLeftIcon,
            rightIcon && styles.inputWithRightIcon,
            multiline && styles.multilineInput,
            inputStyle,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          editable={editable}
          multiline={multiline}
          maxLength={maxLength}
          autoFocus={autoFocus}
          testID={testID}
          accessibilityLabel={accessibilityLabel}
        />

        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
            style={[styles.rightIconContainer, rightIconStyle]}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.bottomContainer}>
        {showError && error && errorMessage ? (
          <Text style={[styles.errorText, errorStyle]}>{errorMessage}</Text>
        ) : (
          <View style={{ flex: 1 }} />
        )}

        {maxLength && (
          <Text
            style={[
              styles.counterText,
              value?.length > maxLength && styles.counterTextError,
            ]}
          >
            {value?.length || 0}/{maxLength}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: '#1F2937',
    fontSize: fontSize.medium,
    fontFamily: fontFamily.Inter_Medium,
    marginBottom: HP(1),
    lineHeight: HP(2.2),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 8,
    height: HP(6),
  },
  inputContainerError: {
    borderColor: '#EF4444',
  },
  inputContainerDisabled: {
    backgroundColor: '#F9FAFB',
    borderColor: '#E5E7EB',
  },
  leftIconContainer: {
    paddingLeft: WP(3),
    paddingRight: WP(2),
  },
  rightIconContainer: {
    paddingRight: WP(3),
    paddingLeft: WP(2),
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: fontSize.medium,
    color: '#1F2937',
    fontFamily: fontFamily.Inter_Regular,
    paddingHorizontal: WP(3),
    paddingVertical: 0,
  },
  inputWithLeftIcon: {
    paddingLeft: WP(1),
  },
  inputWithRightIcon: {
    paddingRight: WP(1),
  },
  multilineInput: {
    height: HP(12),
    textAlignVertical: 'top',
    paddingTop: HP(1.5),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: HP(0.5),
    minHeight: HP(2),
  },
  errorText: {
    fontSize: fontSize.small,
    color: '#EF4444',
    fontFamily: fontFamily.Inter_Regular,
    flex: 1,
  },
  counterText: {
    fontSize: fontSize.small,
    color: '#6B7280',
    fontFamily: fontFamily.Inter_Regular,
    alignSelf: 'flex-end',
  },
  counterTextError: {
    color: '#EF4444',
  },
});

export { CustomInput };
