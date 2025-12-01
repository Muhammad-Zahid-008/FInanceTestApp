import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CustomButton } from '../../../components';
import { WP, HP, appIcons, appImages } from '../../../utils';
import CircleIcon from '../../../components/AppContainer/CircleIcon';
import TitleWithSubtitle from '../../../components/AppHeadings/TitleWithSubtitle';
import BackToLogin from '../../../components/AppButton/BackToLogin';
import styles from './styles';

const EmailVerifiedScreen = ({ navigation, route }) => {
  const { from } = route.params || {};

  const isFromSetPassword = from === 'setPassword';
  const iconSource = isFromSetPassword ? appIcons.success : appIcons.verify;
  const titleText = isFromSetPassword ? 'Successfully' : 'Email verified';
  const subtitleText = isFromSetPassword
    ? 'Your account has been successfully created. Click below to log in magically.'
    : 'Your email has been successfully verified. Click below to next step.';
  const continueAction = isFromSetPassword
    ? () => navigation.replace('Login')
    : () => navigation.replace('SetPassword');

  return (
    <ImageBackground
      source={appImages.bgImg}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <CircleIcon source={iconSource} />

          <TitleWithSubtitle title={titleText} subtitle={subtitleText} />

          <CustomButton title="Continue" onPress={continueAction} />

          {!isFromSetPassword && (
            <BackToLogin onPress={() => navigation.goBack()} />
          )}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EmailVerifiedScreen;
