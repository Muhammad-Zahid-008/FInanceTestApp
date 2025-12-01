import { StyleSheet } from 'react-native';
import { colors, fontFamily, fontSize, HP, WP } from '../../../utils';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: WP(8),
    justifyContent: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: HP(6),
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  backText: {
    fontSize: 16,
    color: '#212529',
    fontWeight: '600',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: HP(4),
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 10,
  },
  mailIcon: {
    width: 40,
    height: 40,
    tintColor: '#0D9488',
  },
  title: {
    fontSize: fontSize.xxlarge,
    fontFamily: fontFamily.Inter_SemiBold,
    textAlign: 'center',
    color: colors.b1,
    marginBottom: HP(1),
  },
  subtitle: {
    fontSize: 16,
    color: '#6C757D',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: HP(6),
  },
  emailText: {
    color: '#212529',
    fontWeight: '600',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: HP(6),
  },
  otpBox: {
    width: WP(15),
    height: WP(15),
    borderRadius: 8,
    borderColor: '#D5D7DA',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    fontSize: fontSize.small,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
    shadowColor: '#332929ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  verifyButton: {
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonDisabled: {
    backgroundColor: '#8dd0c8ff',
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  resendContainer: {
    marginTop: HP(4),
    alignItems: 'center',
  },
  resendText: {
    fontSize: fontSize.xsmall,
    color: colors.g3,
    fontFamily: fontFamily.Inter_Medium,
  },
  resendLink: {
    fontSize: fontSize.normal,
    color: colors.primary,
    fontFamily: fontFamily.Inter_Medium,
    fontWeight: 'bold',
  },
  resendLinkDisabled: {
    color: '#A0CEC9',
  },
});

export default styles;
