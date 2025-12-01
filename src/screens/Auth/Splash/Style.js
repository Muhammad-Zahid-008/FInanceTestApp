import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: WP(50),
    height: HP(50),
  },
});

export default styles;
