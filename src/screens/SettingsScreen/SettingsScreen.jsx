// src/screens/SettingsScreen/SettingsScreen.js
import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text, Surface } from "react-native-paper";
import { useTheme } from "../../contexts/ThemeContext";

const SettingsScreen = () => {
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <Surface style={styles.container}>
      <Text style={styles.text}>Configurações</Text>
      <Button mode="contained" onPress={toggleTheme}>
        Alternar para tema {isDarkTheme ? "claro" : "escuro"}
      </Button>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default SettingsScreen;
