import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes'

// import { Container } from './styles';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#2CCD9B"/>
    <View style={{flex:1, backgroundColor: '#e3e3e0'}}>
    <Routes/>
  </View>
  </NavigationContainer>
  
)
export default App;