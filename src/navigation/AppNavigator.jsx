import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { Provider } from "react-native-paper";
import { useTheme } from "../contexts/ThemeContext";
import {
  CombinedDarkTheme,
  CombinedLightTheme,
  NavigationDarkTheme,
  NavigationLightTheme,
} from "../config/theme";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import PhotoPostScreen from "../screens/PhotoPostScreen/PhotoPostScreen";
import FeedScreen from "../screens/FeedScreen/FeedScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedLightTheme;
  const themeNavigation = isDarkTheme
    ? NavigationDarkTheme
    : NavigationLightTheme;
  return (
    <Provider theme={theme}>
      <NavigationContainer theme={themeNavigation}>
        <Stack.Navigator
          // initialRouteName="PhotoPostScreen"
        >
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
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
              title: "Página iniciaç",
            }}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{
              headerShown: false,
              title: "Configurações",
            }}
          />
          <Stack.Screen
            name="PhotoPostScreen"
            component={PhotoPostScreen}
            options={{ title: "Nova Postagem" }}
          />
          <Stack.Screen
            name="FeedScreen"
            component={FeedScreen}
            options={{ title: "Seu feed" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
