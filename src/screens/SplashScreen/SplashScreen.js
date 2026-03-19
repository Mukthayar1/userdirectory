import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import colors from '../../constants/colors';
import { moderateScale, textScale } from '../../utils/responsive';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Directory</Text>
      <ActivityIndicator size="large" color={colors.theme} style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: textScale(32),
    fontWeight: 'bold',
    color: colors.theme,
    marginBottom: moderateScale(20),
  },
  loader: {
    marginTop: moderateScale(20),
  },
});

export default SplashScreen;