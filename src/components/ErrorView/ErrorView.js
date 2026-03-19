import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { moderateScale, textScale } from '../../utils/responsive';

const ErrorView = ({ message, onRetry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message || 'Something went wrong'}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20),
    backgroundColor: colors.background,
  },
  message: {
    fontSize: textScale(16),
    color: colors.red,
    textAlign: 'center',
    marginBottom: moderateScale(20),
  },
  retryButton: {
    backgroundColor: colors.theme,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(8),
  },
  retryText: {
    color: '#FFFFFF',
    fontSize: textScale(16),
    fontWeight: '600',
  },
});

export default ErrorView;