import React from 'react';
import { View, Text, ImageBackground, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CustomInput, CustomButton } from '../../../components';
import { WP, HP, appIcons, appImages, colors, fontSize } from '../../../utils';
import TitleWithSubtitle from '../../../components/AppHeadings/TitleWithSubtitle';
import CircleIcon from '../../../components/AppContainer/CircleIcon';
import styles from './styles';

const passwordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Must contain at least 1 special character',
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const SetPassword = ({ navigation }) => {
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
        >
          <CircleIcon source={appIcons.setPass} />
          <TitleWithSubtitle
            title="Set a password"
            subtitle={` Please set a strong password for your account${'\n'} to secure your account.`}
          />
          <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            validationSchema={passwordValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              setTimeout(() => {
                setSubmitting(false);
                navigation.replace('EmailVerifiedScreen', {
                  from: 'setPassword',
                });
              }, 2000);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
              isSubmitting,
            }) => {
              const hasMinLength = values.password.length >= 8;
              const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(
                values.password,
              );
              const passwordsMatch =
                values.password && values.password === values.confirmPassword;

              return (
                <>
                  <CustomInput
                    label="Password"
                    placeholder="••••••••"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                  />

                  <CustomInput
                    label="Confirm Password"
                    placeholder="••••••••"
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    secureTextEntry
                  />

                  <View style={styles.rulesContainer}>
                    <View style={styles.ruleRow}>
                      <Image
                        source={
                          hasMinLength ? appIcons.success : appIcons.greySuccess
                        }
                        style={[
                          styles.ruleIcon,
                          hasMinLength && styles.ruleIconActive,
                        ]}
                      />
                      <Text
                        style={[
                          styles.ruleText,
                          hasMinLength && styles.ruleTextActive,
                        ]}
                      >
                        Must be at least 8 characters
                      </Text>
                    </View>
                    <View style={styles.ruleRow}>
                      <Image
                        source={
                          hasSpecialChar
                            ? appIcons.success
                            : appIcons.greySuccess
                        }
                        style={[
                          styles.ruleIcon,
                          hasSpecialChar && styles.ruleIconActive,
                        ]}
                      />
                      <Text
                        style={[
                          styles.ruleText,
                          hasSpecialChar && styles.ruleTextActive,
                        ]}
                      >
                        Must contain one special character
                      </Text>
                    </View>
                    <View style={styles.ruleRow}>
                      <Image
                        source={
                          passwordsMatch
                            ? appIcons.success
                            : appIcons.greySuccess
                        }
                        style={[
                          styles.ruleIcon,
                          passwordsMatch && styles.ruleIconActive,
                        ]}
                      />
                      <Text
                        style={[
                          styles.ruleText,
                          passwordsMatch && styles.ruleTextActive,
                        ]}
                      >
                        Passwords must match
                      </Text>
                    </View>
                  </View>

                  <CustomButton
                    title="Save Password"
                    onPress={handleSubmit}
                    loading={isSubmitting}
                    disabled={
                      !(hasMinLength && hasSpecialChar && passwordsMatch)
                    }
                  />
                </>
              );
            }}
          </Formik>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SetPassword;
