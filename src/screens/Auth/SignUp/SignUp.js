import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { CustomInput, CustomButton, PhoneInput } from '../../../components';
import { appIcons, appImages, signUpValidationSchema } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import TitleWithSubtitle from '../../../components/AppHeadings/TitleWithSubtitle';
import CircleIcon from '../../../components/AppContainer/CircleIcon';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const handleSignUp = (values, { setSubmitting }) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      console.log('Sign Up submitted:', values);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={appImages.bgImg}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
            extraScrollHeight={20}
            enableAutomaticScroll={true}
          >
            <CircleIcon source={appIcons.user} />

            <TitleWithSubtitle
              title={'Your details'}
              subtitle={` Welcome! Your data is securely encrypted${'\n'}as we set up your account.`}
            />
            <Formik
              initialValues={{ name: '', email: '', phone: '', country: null }}
              validationSchema={signUpValidationSchema}
              onSubmit={handleSignUp}
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
                    label="Name"
                    placeholder="Enter your name"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    error={touched.name && !!errors.name}
                    errorMessage={touched.name && errors.name}
                    maxLength={50}
                  />

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

                  <PhoneInput
                    label="Phone"
                    value={values.phone || ''}
                    onChangeText={handleChange('phone')}
                    defaultCountry={values.country?.isoCode2 || 'PK'}
                    onChangeCountry={country => {
                      setFieldValue('country', country);
                      if (!values.phone.startsWith(country.callingCode)) {
                        handleChange('phone')(country.callingCode);
                      }
                    }}
                    error={touched.phone && Boolean(errors.phone)}
                    errorMessage={touched.phone && errors.phone}
                  />

                  <CustomButton
                    title="Continue"
                    onPress={handleSubmit}
                    loading={isSubmitting}
                    loadingText="Creating Account..."
                    size="large"
                    variant="primary"
                    disabled={isSubmitting}
                    containerStyle={styles.buttonContainer}
                  />
                </>
              )}
            </Formik>
            <View style={styles.loginRow}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginBtn}>Login</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;
