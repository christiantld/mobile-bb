import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListPage from '../pages/List'
import CreatePage from '../pages/Create'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const List = createStackNavigator();

const ListRoutes: React.FC = () => (
  <List.Navigator screenOptions={{
    headerTintColor: '#484848',
    headerStyle: { backgroundColor: "#2CCD9B"},
    cardStyle: { backgroundColor: '#e3e3e0' },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
  }}
  >
    <List.Screen name="Login" component={SignIn} />
    <List.Screen name="Cadastro" component={SignUp} />
    <List.Screen name="Blackbook" component={ListPage} />
    <List.Screen name="Create" component={CreatePage} />
  </List.Navigator>
)

export default ListRoutes;