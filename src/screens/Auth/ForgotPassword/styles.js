import { StyleSheet } from 'react-native';
import { colors, fontFamily, fontSize, HP, WP } from '../../../utils';

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  safeArea: { flex: 1 },
  content: {
    flexGrow: 1,
    paddingHorizontal: WP(4),
    justifyContent: 'center',
  },
  iconContainer: { alignItems: 'center', marginBottom: HP(4) },
  iconCircle: {
    width: WP(16),
    aspectRatio: 1,
    borderRadius: WP(8),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 10,
  },
  lockIcon: { width: WP(8), height: WP(8), tintColor: '#0D9488' },
  title: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    color: '#212529',
    marginBottom: HP(1),
  },
  subtitle: {
    fontSize: 16,
    color: '#6C757D',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: HP(6),
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HP(6),
  },
  backIcon: {
    width: WP(6),
    height: HP(3),
    marginRight: WP(3),
  },
  backText: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.Inter_Medium,
    color: colors.g3,
  },
  btnContainer: {
    marginVertical: HP(2),
  },
});

export default styles;
