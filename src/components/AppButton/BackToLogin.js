import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { WP, HP, appIcons, fontSize, fontFamily, colors } from '../../utils';

const BackToLogin = ({ onPress, label = 'Back to Log In' }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={appIcons.backArrow}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HP(6),
  },
  icon: { width: WP(6), height: HP(3), marginRight: WP(3) },
  text: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.Inter_Medium,
    color: colors.g3,
    fontWeight: '600',
  },
});

export default BackToLogin;
