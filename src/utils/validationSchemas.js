import * as Yup from 'yup';

// Sign Up Validation Schema
export const signUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .matches(/^[A-Za-z\s]+$/, 'Numbers are not allowed in name'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  phone: Yup.string()
    .required('Phone number is required')
    .test(
      'is-valid-phone',
      'Please enter a valid phone number (at least 10 digits)',
      function (value) {
        if (!value) return false;

        // Remove all non-digit characters
        const digitsOnly = value.replace(/\D/g, '');

        // Optional: also get the calling code from selected country
        const countryCallingCode = this.parent.country?.callingCode || '';
        const digitsWithoutCode = countryCallingCode
          ? digitsOnly.replace(new RegExp(`^${countryCallingCode}`), '')
          : digitsOnly;

        // Check if national number has at least 10 digits (US standard)
        return digitsWithoutCode.length >= 10;
      },
    ),
});

// Login Validation Schema
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  rememberMe: Yup.boolean(),
});

// Forgot Password Validation Schema
export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
});
