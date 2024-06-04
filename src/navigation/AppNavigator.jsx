// src/navigation/AppNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { useTheme } from "../contexts/ThemeContext";
import { CombinedDefaultTheme, CombinedDarkTheme } from "../config/theme";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
// import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              headerShown: true,
              title: "Registro de usuário",
            }}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{
              headerShown: true,
              title: "Configurações",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
