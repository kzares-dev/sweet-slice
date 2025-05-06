import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@/screens/root';
import { initializeDB } from '@/services/db';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SQLiteProvider, useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';

//<SQLiteProvider onInit={initializeDB} databaseName="sweet-slice.db">
//</SQLiteProvider>
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
