import { StatusBar, StyleSheet } from 'react-native';
import { colors, fontFamily, fontSize, HP, WP } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: WP(4),
    paddingTop: StatusBar.currentHeight || HP(2),
  },
  logoStyle: {
    width: WP(12),
    height: HP(6),
    marginBottom: HP(2),
    alignSelf: 'center',
  },
  title: {
    fontSize: fontSize.h1,

    marginBottom: HP(1),
    textAlign: 'center',
    fontFamily: fontFamily.Inter_ExtraBold,
  },
  subtitle: {
    fontSize: fontSize.tiny,
    color: colors.g1,
    textAlign: 'center',
    lineHeight: HP(2.5),
    marginBottom: HP(3),
  },
  buttonContainer: {
    marginTop: HP(4),
  },
  loginRow: {
    flexDirection: 'row',
    marginTop: HP(3),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: WP(4),
  },
  loginText: {
    fontSize: fontSize.xsmall,
    color: colors.g3,
    fontFamily: fontFamily.Inter_Medium,
  },
  loginBtn: {
    fontSize: fontSize.normal,
    color: colors.primary,
    fontFamily: fontFamily.Inter_Medium,
    fontWeight: 'bold',
  },
});

export default styles;
