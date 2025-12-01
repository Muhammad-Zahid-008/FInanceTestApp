import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HP, fontSize, fontFamily, colors } from '../../utils';

const TitleWithSubtitle = ({
  title,
  subtitle,
  subtitleComponent,
  style = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {subtitleComponent ? (
        subtitleComponent
      ) : subtitle ? (
        <Text style={styles.subtitle}>{subtitle}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: HP(4), alignItems: 'center' },
  title: {
    fontSize: fontSize.xxlarge,
    fontFamily: fontFamily.Inter_Medium,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.b1,
    marginBottom: HP(1),
  },
  subtitle: {
    fontSize: fontSize.small,
    color: colors.g1,
    textAlign: 'center',

    lineHeight: 22,
    marginBottom: HP(3),
  },
});

export default TitleWithSubtitle;
