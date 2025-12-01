import React from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { CustomInput, CustomButton } from '../../../components';
import {
  appIcons,
  appImages,
  forgotPasswordValidationSchema,
} from '../../../utils';
import styles from './styles';
import TitleWithSubtitle from '../../../components/AppHeadings/TitleWithSubtitle';
import CircleIcon from '../../../components/AppContainer/CircleIcon';
import BackToLogin from '../../../components/AppButton/BackToLogin';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const handleReset = (values, { setSubmitting }) => {
    navigation.navigate('OTPScreen');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      console.log('Reset link sent to:', values.email);
    }, 2000);
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
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <CircleIcon source={appIcons.forgot} />

          <TitleWithSubtitle
            title={'Forgot password?'}
            subtitle={'No worries, we’ll send you reset instructions.'}
          />

          <Formik
            initialValues={{ email: '' }}
            validationSchema={forgotPasswordValidationSchema}
            onSubmit={handleReset}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <>
                <CustomInput
                  label="Email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  error={touched.email && !!errors.email}
                  errorMessage={touched.email && errors.email}
                />

                <CustomButton
                  title="Reset password"
                  onPress={handleSubmit}
                  loading={isSubmitting}
                  containerStyle={styles.btnContainer}
                />
              </>
            )}
          </Formik>

          <BackToLogin onPress={() => navigation.goBack()} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ForgotPassword;
