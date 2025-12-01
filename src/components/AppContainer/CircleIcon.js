import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { HP, WP, colors } from '../../utils';

const CircleIcon = ({
  source,
  size = WP(16),
  iconSize = WP(8),
  backgroundColor = '#FFFFFF',
}) => {
  return (
    <View
      style={[
        styles.circle,
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
      ]}
    >
      <Image
        source={source}
        style={{ width: iconSize, height: iconSize }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 10,
    alignSelf: 'center',
    marginVertical: HP(2),
    marginBottom: HP(5),
  },
});

export default CircleIcon;
