import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@/screens/root';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <RootNavigator />
      </SafeAreaProvider>
    </NavigationContainer>

  );
};

export default App;
