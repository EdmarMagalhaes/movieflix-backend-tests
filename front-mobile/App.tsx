import 'react-native-gesture-handler';
import React from 'react';
import { useFonts, OpenSans_700Bold, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import Routes from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;

 

