import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import Loader from "../../../components/Loader/Loader";
import colors from '../../../theme/colors';
import { moderateScale, textScale, verticalScale } from '../../../theme/size';

const LoginScreen = () => {

  const { control, handleSubmit, formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>U</Text>
          </View>
          <Text style={styles.appName}>Welcome back</Text>
          <Text style={styles.tagline}>Sign in to your account to continue</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Email address</Text>
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, errors.email && styles.inputError]}
                  placeholder="you@example.com"
                  placeholderTextColor={colors.lightGrey}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              )}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}
          </View>

          <View style={styles.field}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Password</Text>
            </View>
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
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, errors.password && styles.inputError]}
                  placeholder="Password"
                  placeholderTextColor={colors.lightGrey}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry
                />
              )}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      {isSubmitting && <Loader />}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(24),
    paddingVertical: verticalScale(40),
  },
  header: {
    alignItems: 'center',
    marginBottom: verticalScale(36),
  },
  logoBox: {
    width: verticalScale(60),
    height: verticalScale(60),
    borderRadius: 10,
    backgroundColor: colors.theme,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
    shadowColor: colors.theme,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  logoText: {
    fontSize: textScale(24),
    fontWeight: 'bold',
    color: '#fff',
  },
  appName: {
    fontSize: textScale(26),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },
  tagline: {
    fontSize: textScale(14),
    color: 'grey',
    textAlign: 'center',
    lineHeight: 20,
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
    gap: 20,
  },
  field: {
    gap: 6,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: textScale(13),
    fontWeight: '600',
    color: '#000',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    paddingHorizontal: moderateScale(14),
    paddingVertical: verticalScale(13),
    fontSize: textScale(15),
    color: '#000',
  },
  inputError: {
    borderColor: colors.red,
  },
  errorText: {
    fontSize: textScale(12),
    color: colors.red,
  },
  button: {
    backgroundColor: colors.theme,
    borderRadius: 10,
    paddingVertical: moderateScale(14),
    alignItems: 'center',
    marginTop: 4,
    shadowColor: colors.theme,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: textScale(15),
    fontWeight: 'bold',
  },
})

export default LoginScreen