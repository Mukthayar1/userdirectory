import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from "./src/store/redux/store"
import AppNavigator from './src/navigation/AppNavigator'
import colors from './src/constants/colors'
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import OfflineBanner from './src/components/OfflineBanner/OfflineBanner';

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
              <StatusBar barStyle={'light-content'} backgroundColor={colors.theme} />
              <KeyboardProvider>
                <OfflineBanner />
                <AppNavigator />
              </KeyboardProvider>
            </SafeAreaView>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})