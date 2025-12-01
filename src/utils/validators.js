// Email validation
export const validateEmail = email => {
  if (!email) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
};

// Password validation
export const validatePassword = password => {
  if (!password) return false;
  return password.length >= 6;
};

// Strong password validation
export const validateStrongPassword = password => {
  if (!password) return false;
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongRegex.test(password);
};

// Phone number validation
export const validatePhone = phone => {
  if (!phone) return false;
  const cleaned = phone.replace(/[^\d+]/g, '');
  const re = /^[\+]?[1-9][\d]{0,15}$/;
  return re.test(cleaned);
};

// Name validation
export const validateName = name => {
  if (!name) return false;
  const trimmed = name.trim();
  return trimmed.length >= 2 && /^[a-zA-Z\s]+$/.test(trimmed);
};

// Required field validation
export const validateRequired = value => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') return Object.keys(value).length > 0;
  return true;
};

// URL validation
export const validateURL = url => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

// Number validation
export const validateNumber = value => {
  if (value === null || value === undefined) return false;
  return !isNaN(parseFloat(value)) && isFinite(value);
};

// Credit card validation (simple Luhn check)
export const validateCreditCard = cardNumber => {
  if (!cardNumber) return false;
  const cleaned = cardNumber.replace(/\D/g, '');

  if (!/^\d+$/.test(cleaned) || cleaned.length < 13 || cleaned.length > 19) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

// Date validation
export const validateDate = dateString => {
  if (!dateString) return false;
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

// Minimum length validation
export const validateMinLength = (value, minLength) => {
  if (!value) return false;
  return value.toString().length >= minLength;
};

// Maximum length validation
export const validateMaxLength = (value, maxLength) => {
  if (!value) return false;
  return value.toString().length <= maxLength;
};

// Range validation
export const validateRange = (value, min, max) => {
  if (!validateNumber(value)) return false;
  const num = parseFloat(value);
  return num >= min && num <= max;
};

// Match validation (for confirm password, etc.)
export const validateMatch = (value1, value2) => {
  return value1 === value2;
};
