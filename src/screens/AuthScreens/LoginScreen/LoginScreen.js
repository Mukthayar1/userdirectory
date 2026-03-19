import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useSelector } from 'react-redux';

import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../../hooks/useAuth';
import colors from '../../../constants/colors';
import { moderateScale, textScale } from '../../../utils/responsive';
import { useFocusEffect } from '@react-navigation/native';

const LoginScreen = () => {

  const { login } = useAuth();
  const { saveUserInfo, userEmail } = useSelector(state => state.auth);
  const [rememberMe, setRememberMe] = useState(false);
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({ defaultValues: { email: '', password: '', } });

  const onSubmit = data => {
    login(data.email, data.password, rememberMe);
  };

  useFocusEffect(
    useCallback(() => {
      if (saveUserInfo) {
        setValue('email', userEmail);
        setRememberMe(true)
      }
    }, [])
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry
              />
            )}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setRememberMe(!rememberMe)}>
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  title: {
    fontSize: textScale(32),
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: moderateScale(8),
  },
  subtitle: {
    fontSize: textScale(16),
    color: '#666666',
    marginBottom: moderateScale(40),
  },
  inputContainer: {
    marginBottom: moderateScale(16),
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(8),
    padding: moderateScale(12),
    fontSize: textScale(16),
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  inputError: {
    borderColor: colors.red,
  },
  errorText: {
    color: colors.red,
    fontSize: textScale(12),
    marginTop: moderateScale(4),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(24),
  },
  checkbox: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderWidth: 2,
    borderColor: colors.theme,
    borderRadius: moderateScale(4),
    marginRight: moderateScale(8),
  },
  checkboxChecked: {
    backgroundColor: colors.theme,
  },
  checkboxLabel: {
    fontSize: textScale(14),
    color: '#666666',
  },
  loginButton: {
    backgroundColor: colors.theme,
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(8),
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: textScale(16),
    fontWeight: '600',
  },
});

export default LoginScreen;