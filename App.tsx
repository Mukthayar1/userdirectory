import React from 'react';
import { StatusBar, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardProvider } from "react-native-keyboard-controller";

import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
        <KeyboardProvider>
          <AppNavigator />
        </KeyboardProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App