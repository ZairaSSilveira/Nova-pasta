import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen'; // Importe o arquivo correto
import RegisterScreen from './RegisterScreen';
import ResetPasswordScreen from './ResetPasswordScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Tela de Login */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Entrar' }} 
        />

        {/* Tela de Cadastro */}
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Cadastrar-se' }} 
        />

        {/* Tela de Recuperação de Senha */}
        <Stack.Screen 
          name="ResetPassword" 
          component={ResetPasswordScreen} 
          options={{ title: 'Recuperar Senha' }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
