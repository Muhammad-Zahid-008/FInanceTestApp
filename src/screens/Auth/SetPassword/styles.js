import { StyleSheet } from 'react-native';
import { WP, HP, colors, fontSize } from '../../../utils';

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
    // paddingTop: HP(4),
  },
  subtitle: {
    fontSize: fontSize.medium,
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: HP(4),
  },
  rulesContainer: {
    marginTop: HP(2),
    marginBottom: HP(4),
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: HP(1.5),
  },
  ruleIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    tintColor: colors.grayLight,
  },
  ruleIconActive: {
    tintColor: colors.primary,
  },
  ruleText: {
    fontSize: fontSize.small,
    color: colors.gray,
  },
  ruleTextActive: {
    color: colors.black,
    fontWeight: '500',
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HP(3),
  },
  loginText: {
    fontSize: fontSize.medium,
    color: colors.gray,
  },
  loginLink: {
    fontSize: fontSize.medium,
    color: colors.primary,
    fontWeight: '600',
  },
});

export default styles;
