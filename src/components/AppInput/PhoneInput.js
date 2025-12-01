// components/PhoneInput.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InternationalPhoneInput from 'react-native-international-phone-number';
import { HP, WP, fontFamily, fontSize } from '../../utils';

const PhoneInput = ({
  value,
  onChangeText,
  label = 'Phone',
  placeholder = 'Enter phone number',
  error,
  errorMessage,
  containerStyle,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <InternationalPhoneInput
        phoneNumber={value}
        onChangePhoneNumber={onChangeText}
        onChangeCountry={setSelectedCountry}
        defaultCountry="PK"
        placeholder={placeholder}
        keyboardType="phone-pad"
        containerStyle={styles.inputContainer}
        flagContainerStyle={styles.flagContainer}
        dialCodeTextStyle={styles.dialCode}
        phoneInputStyle={styles.phoneInputStyle}
        modalContainerStyle={styles.modalContainer}
        modalSelectedCountryItemStyle={styles.modalSelectedItem}
        modalCountryItemCountryNameStyle={styles.modalCountryName}
        modalCountryItemCountryDialCodeStyle={styles.modalDialCode}
        modalSearchInputStyle={styles.modalSearchInput}
      />

      {error && errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: HP(3),
  },
  label: {
    color: '#1F2937',
    fontSize: fontSize.medium,
    fontFamily: fontFamily.Inter_Medium,
    marginBottom: HP(1),
  },

  inputContainer: {
    height: HP(6),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP(3),
  },
  flagContainer: {
    marginRight: WP(3),
    paddingRight: WP(3),
    borderRightWidth: 1,
    borderRightColor: '#E9ECEF',
  },
  dialCode: {
    fontSize: fontSize.medium,
    color: '#1F2937',
    fontFamily: fontFamily.Inter_Regular,
    marginRight: WP(2),
  },
  phoneInputStyle: {
    flex: 1,
    fontSize: fontSize.medium,
    color: '#1F2937',
    fontFamily: fontFamily.Inter_Regular,
  },

  errorText: {
    fontSize: fontSize.small,
    color: '#EF4444',
    marginTop: HP(0.5),
    fontFamily: fontFamily.Inter_Regular,
  },

  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 20,
  },
  modalSelectedItem: {
    backgroundColor: '#ECF8F6',
  },
  modalCountryName: {
    fontSize: fontSize.normal,
    color: '#1F2937',
    fontFamily: fontFamily.Inter_Medium,
  },
  modalDialCode: {
    fontSize: 15,
    color: '#6C757D',
  },
  modalSearchInput: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    paddingLeft: 45,
    height: 50,
    fontSize: fontSize.small,
  },
});

export { PhoneInput };
