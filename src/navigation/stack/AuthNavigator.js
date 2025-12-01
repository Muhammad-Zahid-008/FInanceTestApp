import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Auth/Login';
import SignUp from '../../screens/Auth/SignUp';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import Splash from '../../screens/Auth/Splash';
import OTPScreen from '../../screens/Auth/OTPScreen';
import EmailVerifiedScreen from '../../screens/Auth/EmailVerifiedScreen';
import SetPassword from '../../screens/Auth/SetPassword';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="OTPScreen" component={OTPScreen} />
    <Stack.Screen name="EmailVerifiedScreen" component={EmailVerifiedScreen} />
    <Stack.Screen name="SetPassword" component={SetPassword} />
  </Stack.Navigator>
);

export default AuthNavigator;
