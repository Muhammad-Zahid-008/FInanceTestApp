import { StyleSheet } from 'react-native';
import { WP, HP, fontSize, fontFamily, colors } from '../../../utils';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: WP(4),
    justifyContent: 'center',
    paddingBottom: HP(5),
  },
  logo: {
    width: WP(15),
    height: HP(6),
    alignSelf: 'center',
    marginBottom: HP(5),
  },
  title: {
    fontSize: fontSize.xxlarge,
    fontFamily: fontFamily.Inter_Medium,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.b1,
    marginBottom: HP(1),
  },
  subtitle: {
    fontSize: fontSize.tiny,
    color: colors.g1,
    textAlign: 'center',

    lineHeight: 22,
    marginBottom: HP(5),
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: HP(5),
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#DEE2E6',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#0D9488',
    borderColor: '#0D9488',
  },
  checkmark: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: 'white',
  },
  rememberText: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.Inter_Medium,
    color: colors.g2,
  },
  forgotText: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.Inter_Medium,
    color: colors.primary,
    fontWeight: '600',
  },
  signInBtn: {
    backgroundColor: '#0D9488',
    height: 56,
    borderRadius: 12,
    marginBottom: HP(4),
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: fontSize.xsmall,
    color: colors.g3,
    fontFamily: fontFamily.Inter_Medium,
  },
  signupLink: {
    fontSize: fontSize.normal,
    color: colors.primary,
    fontFamily: fontFamily.Inter_Medium,
    fontWeight: 'bold',
  },
});

export default styles;
