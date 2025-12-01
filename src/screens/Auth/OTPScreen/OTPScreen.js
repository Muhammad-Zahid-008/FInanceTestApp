import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { appIcons, appImages } from '../../../utils';
import styles from './styles';
import CircleIcon from '../../../components/AppContainer/CircleIcon';
import TitleWithSubtitle from '../../../components/AppHeadings/TitleWithSubtitle';
import BackToLogin from '../../../components/AppButton/BackToLogin';
import { CustomButton } from '../../../components';

const otpValidationSchema = Yup.object().shape({
  code: Yup.array()
    .of(Yup.string().required('Required').matches(/^\d$/, 'Must be a digit'))
    .min(5, 'Enter full OTP')
    .max(5, 'Enter full OTP'),
});

const OTPScreen = ({ navigation, route }) => {
  const { email = 'olivia@cornerstone.com' } = route.params || {};
  const [timer, setTimer] = useState(5);
  const [canResend, setCanResend] = useState(false);
  const inputs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = () => {
    if (!canResend) return;
    setTimer(5);
    setCanResend(false);
    console.log('Resend OTP to:', email);
  };

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
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <CircleIcon source={appIcons.email} />
          <TitleWithSubtitle
            title="Check your inbox"
            subtitleComponent={
              <Text style={styles.subtitle}>
                We sent a verification code to{' '}
                <Text style={styles.emailText}>{email}</Text>
              </Text>
            }
          />
          <Formik
            initialValues={{ code: ['', '', '', '', ''] }}
            validationSchema={otpValidationSchema}
            onSubmit={values => {
              console.log('Verify OTP:', values.code.join(''));
              navigation.navigate('EmailVerifiedScreen');
            }}
          >
            {({ values, setFieldValue, handleSubmit, errors, touched }) => (
              <>
                <View style={styles.otpContainer}>
                  {values.code.map((digit, index) => (
                    <TextInput
                      key={index}
                      ref={ref => (inputs.current[index] = ref)}
                      style={styles.otpBox}
                      value={digit}
                      keyboardType="number-pad"
                      maxLength={1}
                      textAlign="center"
                      onChangeText={text => {
                        if (!/^\d?$/.test(text)) return;
                        // Only allow typing if previous boxes are filled
                        if (index > 0 && !values.code[index - 1]) return;
                        const newCode = [...values.code];
                        newCode[index] = text;
                        setFieldValue('code', newCode);
                        if (text && index < 4)
                          inputs.current[index + 1]?.focus();
                      }}
                      onKeyPress={e => {
                        if (
                          e.nativeEvent.key === 'Backspace' &&
                          !values.code[index] &&
                          index > 0
                        ) {
                          inputs.current[index - 1]?.focus();
                        }
                      }}
                    />
                  ))}
                </View>

                <CustomButton
                  title="Verify email"
                  onPress={handleSubmit}
                  disabled={values.code.join('').length !== 5}
                />

                <View style={styles.resendContainer}>
                  <Text style={styles.resendText}>
                    Didn’t receive the email?{' '}
                    {canResend ? (
                      <Text style={styles.resendLink} onPress={handleResend}>
                        Resend Again
                      </Text>
                    ) : (
                      <Text
                        style={[styles.resendLink, styles.resendLinkDisabled]}
                      >
                        Resend in 00:{timer < 10 ? `0${timer}` : timer}
                      </Text>
                    )}
                  </Text>
                </View>
              </>
            )}
          </Formik>
          <BackToLogin onPress={() => navigation.goBack()} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OTPScreen;
