/**
 * @format
 */
import React, {useCallback, useLayoutEffect} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from '@components';
import {useTheme} from '@theme';
import {SafeContainer, Spacer, Touchable} from '@globals';
import {useToggle} from '@hooks';
import {CheckboxIcon, UncheckboxIcon} from '@icons';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationType} from '@routes';
import {PasswordEye} from '@common';

import {
  Container,
  ForgotPasswordText,
  HStack,
  LoginButton,
  RememberMeContainer,
  RememberMeText,
  SignUpInstruction,
  SubTitle,
  Title,
} from './styles';
import {useLogin} from './useLogin';

const labelSize = 14;
const labelStyle: StyleProp<TextStyle> = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: labelSize,
  color: '#999999',
};

function Login() {
  const navigation = useNavigation<RootNavigationType>();
  const {t} = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({headerLeft: undefined});
  }, []);

  const onDashBoard = () => {}; // navigation.navigate("tabs");
  const {formik, onLogin} = useLogin({onSuccess: onDashBoard});
  const [showPassword, togglePassword] = useToggle(false);

  const getPasswordEye = useCallback(
    () => (
      <PasswordEye visible={showPassword} togglePassword={togglePassword} />
    ),
    [showPassword, togglePassword],
  );

  const {values, errors, handleChange, setFieldValue} = formik;

  const onToggleRememberMe = () => setFieldValue('remember', !values.remember);

  const goToRegisterScreen = () => {};

  const goToForgotPasswordScreen = () => {};

  return (
    <SafeContainer>
      <KeyboardAwareScrollView>
        <Container>
          <Spacer space={20} />
          <Title>Let’s sign you in</Title>
          <SubTitle>Welcome back, you’ve been missed!</SubTitle>
          <Spacer space={20} />
          <TextInput
            label="phone"
            activeLineWidth={1}
            labelFontSize={labelSize}
            labelTextStyle={labelStyle}
            tintColor={t.colors.primary}
            value={values.phone}
            onChangeText={handleChange('phone')}
            error={errors.phone}
            errorColor={t.colors.red}
            keyboardType="phone-pad"
          />

          <TextInput
            secureTextEntry={!showPassword}
            label="Password"
            activeLineWidth={1}
            labelFontSize={labelSize}
            labelTextStyle={labelStyle}
            tintColor={t.colors.primary}
            value={values.password}
            error={errors.password}
            onChangeText={handleChange('password')}
            errorColor={t.colors.red}
            renderRightAccessory={getPasswordEye}
          />
          <Spacer space={20} />
          <HStack>
            <Touchable activeOpacity={1} onPress={onToggleRememberMe}>
              <RememberMeContainer>
                {values.remember ? (
                  <CheckboxIcon height={25} width={25} />
                ) : (
                  <UncheckboxIcon height={25} width={25} />
                )}
                <RememberMeText>Remember me</RememberMeText>
              </RememberMeContainer>
            </Touchable>
            <Touchable onPress={goToForgotPasswordScreen} activeOpacity={1}>
              <ForgotPasswordText>Forgot password?</ForgotPasswordText>
            </Touchable>
          </HStack>
          <Spacer space={40} />
          <LoginButton
            onPress={onLogin}
            text="Log in"
            color={t.colors.primary}
          />
          <Spacer space={10} />
          <SignUpInstruction>
            Don't have an account?
            <SignUpInstruction
              onPress={goToRegisterScreen}
              color={t.colors.secondary}>
              {' '}
              Sign Up
            </SignUpInstruction>
          </SignUpInstruction>
        </Container>
      </KeyboardAwareScrollView>
    </SafeContainer>
  );
}

export {Login};
