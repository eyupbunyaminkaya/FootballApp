import React from 'react';
import { NavigationContainer, View, Image } from '@react-navigation/native';
import Tabs from './src/Router/Router';
import Header from './src/components/Header/Header';

const App=() => {
  return(
    <NavigationContainer>
      <Header />
      <Tabs />
    </NavigationContainer>
  )
}
export default App;