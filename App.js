import { StatusBar } from 'expo-status-bar';

import 'react-native-gesture-handler';

import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen.jsx';
import LoginScreen from './Screens/LoginScreen/LoginScreen.jsx';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home/Home.jsx';
import { Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
const MainStack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Registration">
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />

          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
