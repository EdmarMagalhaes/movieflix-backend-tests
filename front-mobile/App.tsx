import { useFonts, OpenSans_700Bold, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/core/components/Header';
import Login from './src/Pages/Login';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_700Bold, 
    OpenSans_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  
  return (
    <View style={styles.container}>
     <Header />
     <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#525252',
    
  },
});
