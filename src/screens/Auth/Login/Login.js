import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { CustomInput, CustomButton } from '../../../components';
import { appIcons, appImages, loginValidationSchema } from '../../../utils';
import styles from './styles';
import TitleWithSubtitle from '../../../components/AppHeadings/TitleWithSubtitle';

const LoginScreen = ({ navigation }) => {
  const handleLogin = (values, { setSubmitting }) => {
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      console.log('Login pressed:', values);
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
          <Image
            source={appIcons.logoMark}
            style={styles.logo}
            resizeMode="contain"
          />

          <TitleWithSubtitle
            title={'Log in to your account'}
            subtitle={`Welcome back! Your information is securely encrypted. Please enter your details to get started.`}
          />

          <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
            validationSchema={loginValidationSchema}
            onSubmit={handleLogin}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
              setFieldValue,
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

                <CustomInput
                  label="Password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                  error={touched.password && !!errors.password}
                  errorMessage={touched.password && errors.password}
                />

                <View style={styles.optionsRow}>
                  <TouchableOpacity
                    style={styles.rememberMe}
                    onPress={() =>
                      setFieldValue('rememberMe', !values.rememberMe)
                    }
                  >
                    <View
                      style={[
                        styles.checkbox,
                        values.rememberMe && styles.checkboxChecked,
                      ]}
                    >
                      {values.rememberMe && <View style={styles.checkmark} />}
                    </View>
                    <Text style={styles.rememberText}>Remember me</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation?.navigate('ForgotPassword')}
                  >
                    <Text style={styles.forgotText}>Forgot password?</Text>
                  </TouchableOpacity>
                </View>

                <CustomButton
                  title="Sign in"
                  onPress={handleSubmit}
                  loading={isSubmitting}
                  containerStyle={styles.signInBtn}
                />
              </>
            )}
          </Formik>

          <View style={styles.signupRow}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation?.navigate('SignUp')}>
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;
