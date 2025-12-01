import { StyleSheet } from 'react-native';
import { WP } from '../../../utils';

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
    paddingHorizontal: WP(8),
    justifyContent: 'center',
  },
});

export default styles;
